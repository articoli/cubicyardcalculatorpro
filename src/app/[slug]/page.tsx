import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calculator } from "@/components/Calculator";
import { Breadcrumbs, GuideBody, HubLinks } from "@/components/Sections";
import { pageMap, pages } from "@/lib/pages";
import { SITE } from "@/lib/site";
export function generateStaticParams(){return pages.map(page=>({slug:page.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const page=pageMap[slug];if(!page)return {};
 return {title:page.title,description:page.description,alternates:{canonical:"/"+slug+"/"},openGraph:{title:page.title,description:page.description,url:SITE.url+"/"+slug+"/"}};
}
export default async function TopicPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const page=pageMap[slug];if(!page)notFound();
 const structured={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:SITE.url+"/"},{"@type":"ListItem",position:2,name:page.h1,item:SITE.url+"/"+slug+"/"}]};
 return <div><section className="page-hero"><div className="container"><Breadcrumbs current={page.h1}/><div className="eyebrow light">{page.type==="material"?"MATERIAL ESTIMATOR":page.type==="conversion"?"UNIT CONVERSION":page.type==="trust"?"ABOUT THIS RESOURCE":"MEASUREMENT GUIDE"}</div><h1>{page.h1}</h1><p>{page.intro}</p>{page.mode!=="none"&&<a className="mini-hero-link" href="#calculator">Use calculator ↓</a>}</div></section><div className="container main-content page-content">{page.mode!=="none"&&<div id="calculator" className="calculator-anchor"><Calculator mode={page.mode} initialMaterial={page.material??(page.mode==="tons"?"gravel":"generic")}/></div>}<GuideBody page={page}/><div className="next-step"><strong>Need another calculation?</strong><p>Use the <Link href="/">main cubic yard calculator</Link> for general volume, or explore related material and conversion pages below.</p></div><HubLinks current={slug}/></div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured)}}/></div>;
}
