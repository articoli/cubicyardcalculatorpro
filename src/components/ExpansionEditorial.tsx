import Link from "next/link";
import type {ReactNode} from "react";
import {expansionArticles} from "@/lib/expansion-articles";
import {expansionPages} from "@/lib/expansion-pages";
import sources from "@/lib/featured-sources.json";
import {FAQ} from "@/components/Sections";
import {SITE} from "@/lib/site";
const images=new Map(sources.map(i=>[i.slug,i]));
export function featuredImage(slug:string){return images.get(slug);}
function Rich({value}:{value:string}):ReactNode{
 const tokens=/<strong>(.*?)<\/strong>|<em>(.*?)<\/em>|\[\[([^\]|]+)\|([^\]]+)\]\]/g;const parts:ReactNode[]=[];let pos=0,match:RegExpExecArray|null;
 while((match=tokens.exec(value))!==null){if(match.index>pos)parts.push(value.slice(pos,match.index));const k=match.index;
  if(match[1])parts.push(<strong key={k}>{match[1]}</strong>);
  else if(match[2])parts.push(<em key={k}>{match[2]}</em>);
  else if(match[3]&&match[4]){const url=match[4];parts.push(url.startsWith("/")?<Link key={k} href={url}>{match[3]}</Link>:url.startsWith("https://")?<a key={k} href={url} target="_blank" rel="noopener noreferrer">{match[3]} ↗</a>:match[3]);}
  pos=tokens.lastIndex;
 }
 if(pos<value.length)parts.push(value.slice(pos));return <>{parts}</>;
}
export function NewFeature({slug,loading="eager"}:{slug:string;loading?:"eager"|"lazy"}){const item=images.get(slug);if(!item)return null;return <figure className="expansion-feature">
 <div><img src={item.file} alt={item.alt} width={1120} height={630} loading={loading} decoding="async"/></div>
 <figcaption>Editorial photograph: <a href={item.sourcePage} target="_blank" rel="noopener noreferrer">Pexels source</a>. Locally generated WebP version.</figcaption>
 </figure>;}
export function ExpansionArticle({slug}:{slug:string}){
 const a=expansionArticles[slug],page=expansionPages.find(p=>p.slug===slug);if(!a||!page)return null;
 return <article className="expansion-article">
  <div className="expansion-overview"><div className="section-label">{a.category.toUpperCase()}</div><p>{a.lead}</p><div className="expansion-fact"><strong>Key answer</strong><span>{page.keyFact}</span></div></div>
  <nav className="expansion-toc" aria-label="On this page"><strong>In this guide</strong><div>{a.sections.map((section,i)=><a key={section.heading} href={"#section-"+i}>{section.heading}</a>)}<a href="#questions">Frequently asked questions</a></div></nav>
  {a.sections.map((section,i)=><section key={section.heading} id={"section-"+i} className="content-block expansion-section"><h2>{section.heading}</h2>
    {section.paragraphs.map((p,j)=><p key={j}><Rich value={p}/></p>)}
    {section.table&&<div className="table-scroll expansion-table"><table><caption>{section.table.caption}</caption><thead><tr>{section.table.heads.map(h=><th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{section.table.rows.map((row,j)=><tr key={j}>{row.map((v,k)=><td key={k}>{v}</td>)}</tr>)}</tbody></table></div>}
    {section.bullets&&<ul>{section.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>}
  </section>)}
  <div id="questions"><FAQ items={a.faqs}/></div>
  <section className="expansion-sources content-block"><div className="section-label">SOURCE NOTES</div><h2>References and calculation limits</h2><p>Exact unit relationships are mathematical; material properties, practical ordering factors and local conditions require supplier or project-specific verification. The following publications support the relevant technical context.</p><ul>{a.sources.map(([label,url])=><li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a></li>)}</ul><p>For the site's core formulas and density limitations, see our <Link href="/calculation-methodology/">Calculation Methodology</Link>. Need a different tool? Open the <Link href="/">cubic yard calculator homepage</Link> or browse <Link href="/guides/">all related guides</Link>.</p></section>
 </article>;
}
export function ExpansionCard({slug}:{slug:string}){const a=expansionArticles[slug],p=expansionPages.find(p=>p.slug===slug),img=images.get(slug);if(!a||!p||!img)return null;return <article className="guide-card expansion-card"><Link className="guide-card-image" href={"/"+slug+"/"} aria-label={"Read "+p.h1}><img src={img.file} alt={img.alt} width={1120} height={630} loading="lazy" decoding="async"/></Link><div className="guide-card-body"><div className="guide-card-meta"><span>{a.category}</span><span>{a.readTime}</span></div><h3><Link href={"/"+slug+"/"}>{p.h1}</Link></h3><p>{a.lead}</p><Link className="guide-card-link" href={"/"+slug+"/"}>{p.type==="guide"?"Read guide":"Open calculator and guide"} ↗</Link></div></article>;}
