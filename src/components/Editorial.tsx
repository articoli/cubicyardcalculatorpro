import Link from "next/link";
import { guideArticles } from "@/lib/guide-content";
import { conversionArticles } from "@/lib/conversion-content";
import { FAQ } from "@/components/Sections";
import type { PageData } from "@/lib/pages";
import { SITE } from "@/lib/site";
import type { ReactNode } from "react";
function RenderText({source}:{source:string}):ReactNode{
 const re=/\[\[([^|\]]+)\|([^\]]+)\]\]/g;const items:ReactNode[]=[];let last=0;let match:RegExpExecArray|null;
 while((match=re.exec(source))!==null){
  if(match.index>last)items.push(source.slice(last,match.index));
  const href=match[2];if(href.startsWith("/"))items.push(<Link key={match.index} href={href}>{match[1]}</Link>);
  else if(/^https:\/\//.test(href))items.push(<a key={match.index} href={href} target="_blank" rel="noopener noreferrer">{match[1]}</a>);
  else items.push(match[1]);
  last=re.lastIndex;
 }if(last<source.length)items.push(source.slice(last));return <>{items}</>;
}
export function GuideFeature({slug}:{slug:string}){
 const a=guideArticles[slug];if(!a)return null;
 return <figure className="guide-feature">
  <div className="guide-feature-image"><img src={a.image} alt={a.imageAlt} width="1400" height="790" decoding="async" referrerPolicy="no-referrer"/></div>
  <figcaption>Featured photograph: <a href={a.imageCreditUrl} target="_blank" rel="noopener noreferrer">{a.imageCredit}</a>. Illustrative editorial image.</figcaption>
 </figure>;
}
export function GuideArticle({page}:{page:PageData}){
 const a=guideArticles[page.slug];if(!a)return null;
 return <article className="guide-article">
  <div className="guide-lead"><p>{a.lead}</p><p className="guide-quickfact"><strong>At a glance:</strong> {page.keyFact}</p></div>
  <nav className="guide-toc" aria-label="Article contents"><strong>In this guide</strong><div>{a.sections.map((s,i)=><a href={"#guide-section-"+i} key={s.heading}>{s.heading}</a>)}<a href="#guide-questions">Questions and answers</a></div></nav>
  {a.sections.map((s,i)=><section className="content-block" id={"guide-section-"+i} key={s.heading}>
   <h2>{s.heading}</h2>{s.paragraphs.map((p,j)=><p key={j}><RenderText source={p}/></p>)}
   {s.table&&<div className="table-scroll guide-table"><table><caption>{s.table.caption}</caption><thead><tr>{s.table.headers.map(h=><th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{s.table.rows.map((r,j)=><tr key={j}>{r.map((v,k)=><td key={k}>{v}</td>)}</tr>)}</tbody></table></div>}
  </section>)}
  <div id="guide-questions"><FAQ items={a.faqs}/></div>
  <div className="guide-next-step"><h2>Use a calculator for your project</h2><p>These examples explain the formulas. For an immediate quantity, enter your dimensions into the <Link href="/">cubic yard calculator</Link>, or check the <Link href="/guides/">complete guide collection</Link> for more context.</p></div>
 </article>;
}
export function ConversionEditorial({slug}:{slug:string}){
 const d=conversionArticles[slug];if(!d)return null;
 return <article className="conversion-editorial">
  <div className="conversion-summary"><span className="section-label">{d.kind.toUpperCase()}</span><p>{d.summary}</p></div>
  {d.sections.map(s=><section className="content-block" key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map((p,i)=><p key={i}><RenderText source={p}/></p>)}{s.table&&<div className="table-scroll guide-table"><table><caption>{s.table.caption}</caption><thead><tr>{s.table.headers.map(h=><th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{s.table.rows.map((row,i)=><tr key={i}>{row.map((v,j)=><td key={j}>{v}</td>)}</tr>)}</tbody></table></div>}</section>)}
 </article>;
}
export function GuideCard({page}:{page:PageData}){
 const a=guideArticles[page.slug];if(!a)return null;
 return <article className="guide-card"><Link href={"/"+page.slug+"/"} className="guide-card-image" aria-label={"Read "+page.h1}>
  <img src={a.image} alt={a.imageAlt} loading="lazy" decoding="async" width="900" height="510" referrerPolicy="no-referrer"/>
  </Link><div className="guide-card-body"><div className="guide-card-meta"><span>{a.category}</span><span>{a.readTime}</span></div><h3><Link href={"/"+page.slug+"/"}>{page.h1}</Link></h3><p>{a.excerpt}</p><Link className="guide-card-link" href={"/"+page.slug+"/"}>Read guide <span aria-hidden="true">↗</span></Link></div></article>;
}
