import type { Metadata } from "next";
import Link from "next/link";
import { guideLinks } from "@/lib/pages";
import { guideArticles } from "@/lib/guide-content";
import { GuideCard } from "@/components/Editorial";
import { SITE } from "@/lib/site";
export const metadata:Metadata={
 title:"Cubic Yard Guides & Blog | Formulas, Sizes and Coverage",
 description:"Browse guides about cubic yard formulas, volume units, depth and material coverage. Read practical examples and use related calculators for your project.",
 alternates:{canonical:"/guides/"},
 openGraph:{title:"Cubic Yard Guides & Blog",description:"Measurement tutorials, coverage tables and practical material planning advice.",url:SITE.url+"/guides/"}
};
export default function GuidesPage(){
 const groups=["Measurement Methods","Measurement Basics","Coverage & Planning"];
 const schema={"@context":"https://schema.org","@graph":[
  {"@type":"CollectionPage","@id":SITE.url+"/guides/#page",url:SITE.url+"/guides/",name:"Cubic Yard Guides & Blog",description:"Practical guides for cubic yard measurements and material coverage",isPartOf:{"@id":SITE.url+"/#website"}},
  {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:SITE.url+"/"},{"@type":"ListItem",position:2,name:"Guides",item:SITE.url+"/guides/"}]}
 ]};
 return <div><header className="guide-archive-hero"><div className="container"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Guides</span></nav><span className="eyebrow light">LEARN THE FORMULAS · PLAN MATERIALS</span><h1>Guides &amp; Blog</h1><p>Practical measurement tutorials, coverage charts and explanations for concrete, gravel, mulch and soil projects. Start with a guide, then use our free calculator for your measurements.</p><div className="guide-archive-stats"><span>{guideLinks.length} practical guides</span><span>Clear worked examples</span><span>Related calculators</span></div></div></header>
 <main className="container guide-archive-main"><nav className="guide-category-links" aria-label="Guide categories"><a href="#all-guides">All guides</a>{groups.map(g=><a key={g} href={"#"+g.toLowerCase().replace(/\W+/g,"-")}>{g}</a>)}</nav><section id="all-guides" className="content-block guide-archive-section"><div className="section-label">EDITORIAL LIBRARY</div><h2>All cubic yard guides</h2><p>Each topic addresses a different question: how to calculate volume, what a cubic yard represents, or how much area a known cubic-yard quantity covers.</p><div className="guide-card-grid">{guideLinks.map(page=><GuideCard page={page} key={page.slug}/>)}</div></section>
 {groups.map(group=><section key={group} id={group.toLowerCase().replace(/\W+/g,"-")} className="guide-category-section"><h2>{group}</h2><div className="guide-category-rows">{guideLinks.filter(page=>guideArticles[page.slug]?.category===group).map(page=><div key={page.slug}><Link href={"/"+page.slug+"/"}>{page.h1} <span aria-hidden="true">↗</span></Link><p>{guideArticles[page.slug].excerpt}</p></div>)}</div></section>)}
 <aside className="guide-archive-cta"><h2>Need a volume answer right now?</h2><p>Enter your project length, width and depth in the main calculator, or choose a material-specific estimator.</p><Link className="nav-cta" href="/#calculator">Open cubic yard calculator ↗</Link></aside></main>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
 </div>;
}
