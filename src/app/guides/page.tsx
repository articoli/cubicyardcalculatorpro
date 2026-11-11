import type {Metadata} from "next";
import Link from "next/link";
import {guideLinks} from "@/lib/pages";
import {guideArticles} from "@/lib/guide-content";
import {expansionPages} from "@/lib/expansion-pages";
import {expansionArticles} from "@/lib/expansion-articles";
import {GuideCard} from "@/components/Editorial";
import {ExpansionCard} from "@/components/ExpansionEditorial";
import {SITE} from "@/lib/site";
export const metadata:Metadata={
 title:"Cubic Yard Guides & Blog | Calculators, Materials and Planning",
 description:"Read detailed guides and use specialist calculators for cubic yards, gravel, sand, compost, hauling, material costs, conversions and project planning.",
 alternates:{canonical:"/guides/"},
 openGraph:{url:SITE.url+"/guides/",title:"Cubic Yard Guides & Blog",description:"In-depth formulas, material estimators, measurement tutorials and buying guides."}
};
const groups=[
 {id:"measurement-guides",title:"Measurement & Formula Guides",desc:"Understand the units, calculations and measurement methods used across the site.",slugs:["how-to-calculate-cubic-yards","what-is-a-cubic-yard","cubic-yard-coverage-chart","cubic-yard-vs-square-yard","how-to-measure-irregular-areas"]},
 {id:"conversions",title:"Converters & Bag Estimates",desc:"Use exact unit formulas, package volume or actual density to compare quantities.",slugs:["cubic-yards-to-bags","cubic-inches-to-cubic-yards","cubic-yard-cost-calculator"]},
 {id:"materials",title:"Material Calculator Guides",desc:"Different products need different depth, ordering and suitability assumptions.",slugs:["sand-cubic-yard-calculator","landscape-rock-cubic-yard-calculator","compost-cubic-yard-calculator"]},
 {id:"buying-planning",title:"Buying, Delivery & Earthwork",desc:"Learn how weight, access, soil states and supplier pricing change real purchases.",slugs:["how-much-does-a-cubic-yard-weigh","bulk-vs-bagged-materials","soil-swell-and-compaction","material-delivery-planning-guide","excavation-cubic-yard-calculator","dump-truck-load-calculator"]}
];
const all=[...guideLinks,...expansionPages.filter(p=>p.type!=="guide")];
export default function GuidesPage(){
 const schema={"@context":"https://schema.org","@graph":[
  {"@type":"CollectionPage","@id":SITE.url+"/guides/#page",url:SITE.url+"/guides/",name:"Cubic Yard Guides & Blog",description:"Cubic yard measurement articles, specialist calculator guides, and material planning references",isPartOf:{"@id":SITE.url+"/#website"}},
  {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:SITE.url+"/"},{"@type":"ListItem",position:2,name:"Guides",item:SITE.url+"/guides/"}]},
  {"@type":"ItemList",name:"Cubic Yard Guides and Calculator Articles",itemListElement:all.map((p,i)=>({"@type":"ListItem",position:i+1,url:SITE.url+"/"+p.slug+"/",name:p.h1}))}
 ]};
 return <div><header className="guide-archive-hero"><div className="container">
  <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Guides</span></nav>
  <span className="eyebrow light">TOOLS · HOW-TO ARTICLES · BUYING REFERENCES</span><h1>Guides &amp; Blog</h1>
  <p>Everything from understanding a cubic yard to estimating specialist material quantities, buying bags, checking delivery loads and interpreting earthwork measurements. Find a focused guide and use the linked calculator to plan your project.</p>
  <div className="guide-archive-stats"><span>{all.length} detailed resources</span><span>Material-specific examples</span><span>Clear limitations and sources</span></div>
 </div></header>
 <div className="container guide-archive-main">
 <nav className="guide-category-links" aria-label="Guide categories"><a href="#all-guides">All resources</a>{groups.map(g=><a key={g.id} href={"#"+g.id}>{g.title}</a>)}</nav>
 <section className="content-block guide-archive-section" id="all-guides"><div className="section-label">TOPICALLY ORGANIZED RESOURCE LIBRARY</div>
 <h2>Browse all guides and calculators</h2><p>Each page has a distinct purpose. The main homepage calculator answers generic volume questions, while these resources focus on specific measurements, materials, purchasing and project planning.</p>
 <div className="guide-card-grid">{all.map(p=>guideArticles[p.slug]?<GuideCard key={p.slug} page={p}/>:<ExpansionCard key={p.slug} slug={p.slug}/>)}</div></section>
 {groups.map(g=><section key={g.id} className="guide-category-section" id={g.id}><h2>{g.title}</h2><p>{g.desc}</p><div className="guide-category-rows">{g.slugs.map(slug=>{
 const p=all.find(x=>x.slug===slug); if(!p)return null;
 const summary=expansionArticles[slug]?.lead??guideArticles[slug]?.excerpt??p.description;
 return <div key={slug}><Link href={"/"+slug+"/"}>{p.h1}<span aria-hidden="true"> ↗</span></Link><p>{summary}</p></div>;
 })}</div></section>)}
 <aside className="guide-archive-cta"><h2>Already have measurements?</h2><p>Use the free calculator to find the cubic yards of a rectangular or circular area without searching through a long article.</p><Link className="nav-cta" href="/#calculator">Calculate cubic yards ↗</Link></aside>
 </div>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
 </div>;
}
