import type {Metadata} from "next";
import Link from "next/link";
import {SITE} from "@/lib/site";
export const metadata:Metadata={
 title:"Contact | Cubic Yard Calculator Pro",
 description:"Contact Cubic Yard Calculator Pro about calculator errors, editorial corrections or technical feedback through our public GitHub issue tracker.",
 alternates:{canonical:"/contact/"}
};
export default function Contact(){
 const url=SITE.url+"/contact/";
 const schema={"@context":"https://schema.org","@graph":[
  {"@type":"ContactPage",url,name:"Contact Cubic Yard Calculator Pro",description:"Public feedback contact for calculator or editorial corrections",isPartOf:{"@id":SITE.url+"/#website"}},
  {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:SITE.url+"/"},{"@type":"ListItem",position:2,name:"Contact",item:url}]}
 ]};
 return <div><header className="legal-hero"><div className="container"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></nav><div className="eyebrow light">SITE FEEDBACK</div><h1>Contact &amp; Corrections</h1><p>Help improve the accuracy and usability of Cubic Yard Calculator Pro.</p></div></header>
 <div className="container contact-main"><section><h2>Report a calculator problem or content correction</h2><p>If you notice an incorrect formula, a broken link or a confusing explanation, you can report it using the public issue tracker for this website's GitHub repository. Include the page URL, your measured inputs and the result you expected.</p>
 <a className="contact-action" href="https://github.com/articoli/cubicyardcalculatorpro/issues/new" target="_blank" rel="noopener noreferrer">Open a GitHub issue ↗</a>
 <p className="contact-warning"><strong>Privacy note:</strong> GitHub issues are public and require a GitHub account. Please do not include personal details, private addresses, passwords or sensitive project information. This channel is for public technical and editorial feedback only, not private privacy requests.</p>
 </section>
 <section><h2>For material orders and project advice</h2><p>We do not sell or deliver material, quote live local prices, or provide engineering and construction services. For a purchase or safety-critical decision, contact your local material supplier, qualified contractor or relevant specialist rather than relying solely on a website estimate.</p><p>Learn how our formulas work in the <Link href="/calculation-methodology/">calculation methodology</Link>, or check common questions in the <Link href="/guides/">Guides &amp; Blog</Link>.</p></section>
 </div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/></div>;
}
