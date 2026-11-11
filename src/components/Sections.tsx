import Link from "next/link";
import type { PageData } from "@/lib/pages";
import { conversionLinks, materialLinks, guideLinks } from "@/lib/pages";
import type { ReactNode } from "react";

function RichText({ value }: {value: string}): ReactNode {
 const tokens = /<strong>(.*?)<\/strong>|<em>(.*?)<\/em>|\[\[([^\]|]+)\|([^\]]+)\]\]/g;
 const result: ReactNode[] = [];
 let last = 0; let m: RegExpExecArray | null;
 while ((m=tokens.exec(value)) !== null) {
   if (m.index>last) result.push(value.slice(last,m.index));
   const key=m.index;
   if (m[1]) result.push(<strong key={key}>{m[1]}</strong>);
   else if (m[2]) result.push(<em key={key}>{m[2]}</em>);
   else if (m[3] && m[4]){
     const href=m[4];
     if(href.startsWith("/")) result.push(<Link key={key} href={href}>{m[3]}</Link>);
     else if(/^https:\/\//.test(href)) result.push(<a key={key} href={href} target="_blank" rel="noopener noreferrer">{m[3]} ↗</a>);
     else result.push(m[3]);
   }
   last=tokens.lastIndex;
 }
 if(last<value.length) result.push(value.slice(last));
 return <>{result}</>;
}
const sectionId = (heading:string)=>heading.toLowerCase().normalize("NFKD").replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").slice(0,85);
export function Breadcrumbs({current}:{current:string}){return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{current}</span></nav>}
export function FAQ({items}:{items:{question:string;answer:string}[]}){if(!items.length)return null;return <section className="content-block"><div className="section-label">QUICK ANSWERS</div><h2>Frequently Asked Questions</h2><div className="faq-list">{items.map(item=><details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>}
export function HubLinks({current}:{current?:string}){const all=[{heading:"Material calculators",pages:materialLinks},{heading:"Unit conversions",pages:conversionLinks},{heading:"Learning guides",pages:guideLinks}];return <section className="content-block section-links"><div className="section-label">EXPLORE MORE</div><h2>Related Calculators and Guides</h2><p>Continue with a material-specific estimate, convert units, or review the calculation behind your result.</p><div className="resource-columns">{all.map(group=><div className="resource-group" key={group.heading}><h3>{group.heading}</h3>{group.pages.filter(p=>p.slug!==current).map(p=><Link key={p.slug} href={"/"+p.slug+"/"}>{p.h1}<span aria-hidden="true">↗</span></Link>)}</div>)}</div></section>}
export function GuideBody({page}:{page:PageData}){return <article className="editorial"><div className="key-fact"><strong>Key fact</strong><span>{page.keyFact}</span></div>{page.type==="material"&&<nav className="material-toc" aria-label="On this material guide"><strong>On this page</strong><div>{page.sections.map(s=><a key={s.heading} href={"#"+sectionId(s.heading)}>{s.heading}</a>)}<a href="#material-faqs">Frequently asked questions</a></div></nav>}{page.sections.map(s=><section id={page.type==="material"?sectionId(s.heading):undefined} className="content-block" key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map((p,i)=><p key={i}><RichText value={p}/></p>)}{s.table&&<div className="table-scroll material-table"><table><caption>{s.table.caption}</caption><thead><tr>{s.table.headers.map(h=><th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{s.table.rows.map((r,i)=><tr key={i}>{r.map((v,j)=><td key={j}>{v}</td>)}</tr>)}</tbody></table>{s.table.note&&<p className="table-note">{s.table.note}</p>}</div>}{s.bullets&&<ul>{s.bullets.map((b,i)=><li key={i}><RichText value={b}/></li>)}</ul>}</section>)}{page.slug==="cubic-yard-coverage-chart"&&<CoverageTable/>}<div id={page.type==="material"?"material-faqs":undefined}><FAQ items={page.faqs}/></div></article>}
export function CoverageTable(){return <section className="content-block"><h2>Cubic Yard Coverage Quick Reference</h2><p>Coverage below assumes a uniform layer, with no extra allowance for waste, compaction or settling.</p><div className="table-scroll"><table><thead><tr><th>Depth</th><th>Coverage per 1 yd³</th><th>Coverage per 2 yd³</th></tr></thead><tbody>{[1,2,3,4,6,12].map(d=><tr key={d}><td>{d} {d===1?"inch":"inches"}</td><td>{324/d} sq ft</td><td>{648/d} sq ft</td></tr>)}</tbody></table></div></section>}
