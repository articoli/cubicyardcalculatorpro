import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {Calculator} from "@/components/Calculator";
import {ExtendedCalculator} from "@/components/ExtendedCalculator";
import {MaterialEditorial} from "@/components/MaterialEditorial";
import {GuideFeature,GuideArticle,ConversionEditorial} from "@/components/Editorial";
import {NewFeature,ExpansionArticle,featuredImage} from "@/components/ExpansionEditorial";
import {guideArticles} from "@/lib/guide-content";
import {expansionArticles} from "@/lib/expansion-articles";
import {Breadcrumbs,GuideBody,HubLinks,FAQ} from "@/components/Sections";
import {pageMap,pages} from "@/lib/pages";
import {SITE} from "@/lib/site";

export function generateStaticParams(){return pages.map(page=>({slug:page.slug}));}
export const dynamicParams=false;

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const p=pageMap[slug];if(!p)return {};
 const originalGuide=guideArticles[slug],newArticle=expansionArticles[slug],photo=featuredImage(slug);
 const image=photo?SITE.url+photo.file:originalGuide?.image;
 const article=p.type==="guide";
 return {
  title:p.title,
  description:p.description,
  alternates:{canonical:"/"+slug+"/"},
  openGraph:{type:article?"article":"website",url:SITE.url+"/"+slug+"/",title:p.title,description:p.description,...(image?{images:[{url:image,alt:photo?.alt??originalGuide?.imageAlt??p.h1}]}:{})},
  twitter:{card:image?"summary_large_image":"summary",title:p.title,description:p.description,...(image?{images:[image]}:{})}
 };
}

export default async function TopicPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const p=pageMap[slug];if(!p)notFound();
 const newArticle=expansionArticles[slug],existingGuide=guideArticles[slug];
 const photo=featuredImage(slug);
 const href=SITE.url+"/"+slug+"/";
 const isGuide=p.type==="guide";
 const app=p.type==="conversion"||p.type==="material";
 const breadcrumb={"@type":"BreadcrumbList","@id":href+"#breadcrumb",itemListElement:[
  {"@type":"ListItem",position:1,name:"Home",item:SITE.url+"/"},
  ...(isGuide?[{"@type":"ListItem",position:2,name:"Guides",item:SITE.url+"/guides/"}]:[]),
  {"@type":"ListItem",position:isGuide?3:2,name:p.h1,item:href}
 ]};
 const graph:Record<string,unknown>[]=[breadcrumb];
 graph.push({"@type":"WebPage","@id":href+"#webpage",url:href,name:p.h1,description:p.description,inLanguage:"en-US",isPartOf:{"@id":SITE.url+"/#website"},breadcrumb:{"@id":href+"#breadcrumb"},
  ...(app?{mainEntity:{"@id":href+"#calculator"}}:{}),
  ...(photo?{primaryImageOfPage:{"@id":href+"#image"}}:{})
 });
 if(photo)graph.push({"@type":"ImageObject","@id":href+"#image",contentUrl:SITE.url+photo.file,url:SITE.url+photo.file,caption:photo.alt});
 if(app)graph.push({"@type":"WebApplication","@id":href+"#calculator",name:p.h1,url:href,description:p.description,applicationCategory:"UtilitiesApplication",operatingSystem:"Any modern web browser",browserRequirements:"Requires JavaScript to calculate results",isAccessibleForFree:true,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},mainEntityOfPage:{"@id":href+"#webpage"}});
 if(isGuide){
  const image=photo?SITE.url+photo.file:existingGuide?.image;
  graph.push({"@type":"BlogPosting","@id":href+"#article",headline:p.h1,description:p.description,...(image?{image:[image]}:{}),datePublished:"2026-11-11",dateModified:"2026-11-11",inLanguage:"en-US",author:{"@type":"Organization",name:SITE.name,url:SITE.url+"/about/"},publisher:{"@type":"Organization",name:SITE.name,url:SITE.url+"/"},mainEntityOfPage:{"@id":href+"#webpage"}});
 }
 const structured={"@context":"https://schema.org","@graph":graph};
 return <div>
   <section className="page-hero"><div className="container">
    {isGuide?<nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/guides/">Guides</Link><span>/</span><span aria-current="page">{p.h1}</span></nav>:<Breadcrumbs current={p.h1}/>}
    <div className="eyebrow light">{app?(p.type==="material"?"MATERIAL CALCULATOR":"CONVERSION CALCULATOR"):p.type==="trust"?"ABOUT THIS RESOURCE":"PRACTICAL CUBIC YARD GUIDE"}</div>
    <h1>{p.h1}</h1><p>{p.intro}</p>{app&&<a className="mini-hero-link" href="#calculator">Use calculator ↓</a>}
   </div></section>
   <div className="container main-content page-content">
    {app&&<div id="calculator" className="calculator-anchor">{newArticle?<ExtendedCalculator slug={slug}/>:<Calculator mode={p.mode} initialMaterial={p.material??(p.mode==="tons"?"gravel":"generic")}/>}</div>}
    {!newArticle&&!existingGuide&&photo&&<NewFeature slug={slug} loading="lazy"/>}
    {newArticle?<><NewFeature slug={slug} loading="lazy"/><ExpansionArticle slug={slug}/></>:<>
      {existingGuide&&<><GuideFeature slug={slug}/><GuideArticle page={p}/></>}
      {p.type==="conversion"&&<><ConversionEditorial slug={slug}/><FAQ items={p.faqs}/></>}
      {p.type==="material"&&<MaterialEditorial slug={slug}/>}
      {!existingGuide&&p.type!=="conversion"&&<GuideBody page={p}/>}
    </>}
    <div className="next-step"><strong>Need another calculation?</strong><p>Use the <Link href="/">main cubic yard calculator</Link>, or explore <Link href="/guides/">our guides and project-planning resources</Link>.</p></div>
    <HubLinks current={slug}/>
   </div>
   <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,"\\u003c")}}/>
 </div>;
}
