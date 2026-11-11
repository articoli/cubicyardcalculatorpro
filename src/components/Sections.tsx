import Link from "next/link";
import type { PageData } from "@/lib/pages";
import { conversionLinks, materialLinks, guideLinks, pageMap } from "@/lib/pages";
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

const focusedRelated:Record<string,[string,string][]> = {"concrete-cubic-yard-calculator":[["cubic-yards-to-bags","Compare the mixed yield of packaged concrete"],["cubic-yard-cost-calculator","Price ready-mix material and delivery separately"],["cubic-feet-to-cubic-yards","Check quantities measured in cubic feet"],["how-to-calculate-cubic-yards","Review rectangular and cylindrical measurements"],["material-delivery-planning-guide","Plan access and supplier questions"]],"gravel-cubic-yard-calculator":[["cubic-yards-to-tons","Convert yards to weight using supplier density"],["landscape-rock-cubic-yard-calculator","Estimate decorative stone rather than driveway base"],["cubic-yard-coverage-chart","Check coverage at different depths"],["dump-truck-load-calculator","Estimate trips within load limits"],["soil-swell-and-compaction","Understand loose and compacted states"]],"mulch-cubic-yard-calculator":[["cubic-yards-to-bags","Convert a bulk mulch volume into bags"],["bulk-vs-bagged-materials","Compare full purchase and delivery cost"],["cubic-yard-coverage-chart","Compare area coverage by depth"],["compost-cubic-yard-calculator","Estimate soil amendments separately"],["topsoil-cubic-yard-calculator","Estimate a planting-soil layer"]],"topsoil-cubic-yard-calculator":[["compost-cubic-yard-calculator","Estimate compost as an amendment"],["fill-dirt-cubic-yard-calculator","Plan grade changes and backfill separately"],["square-feet-to-cubic-yards","Convert area and intended depth into volume"],["cubic-yard-coverage-chart","Check layer coverage"],["soil-swell-and-compaction","Understand loose and settled soil"]],"fill-dirt-cubic-yard-calculator":[["excavation-cubic-yard-calculator","Estimate bank excavation rather than finished fill"],["soil-swell-and-compaction","Learn bank, loose and compacted volumes"],["topsoil-cubic-yard-calculator","Calculate the growing-soil finish layer"],["dump-truck-load-calculator","Explore delivery capacity and trip counts"],["how-to-measure-irregular-areas","Estimate changing grades from sections"]],"cubic-feet-to-cubic-yards":[["cubic-inches-to-cubic-yards","Convert small volumes measured in inches"],["square-feet-to-cubic-yards","Start with area and thickness instead"],["cubic-yards-to-bags","Compare labeled bag volumes"],["how-to-calculate-cubic-yards","Calculate volume from dimensions"]],"square-feet-to-cubic-yards":[["cubic-yard-coverage-chart","Reverse the calculation to find area coverage"],["how-to-measure-irregular-areas","Measure curved and complex footprints"],["mulch-cubic-yard-calculator","Estimate the finished mulch layer"],["gravel-cubic-yard-calculator","Estimate compacted-base quantities"],["concrete-cubic-yard-calculator","Include slab edges and footings"]],"cubic-yards-to-tons":[["how-much-does-a-cubic-yard-weigh","Learn how moisture and density change weight"],["gravel-cubic-yard-calculator","Measure driveway aggregate before conversion"],["dump-truck-load-calculator","Check estimated hauling trips"],["soil-swell-and-compaction","Match density to the same volume state"],["cubic-yard-cost-calculator","Price the quantity in the supplier's unit"]],"cubic-meters-to-cubic-yards":[["cubic-feet-to-cubic-yards","Convert using US cubic-foot units"],["cubic-inches-to-cubic-yards","Convert small inch-based volumes"],["how-to-calculate-cubic-yards","Measure a geometric shape first"],["cubic-yards-to-tons","Convert volume to weight when density is known"]]};
export function HubLinks({current}:{current?:string}){
 const focused=current?focusedRelated[current]:undefined;
 if(focused)return <section className="content-block section-links focused-links">
  <div className="section-label">CONTINUE WITH THE RIGHT CALCULATOR</div>
  <h2>Relevant Calculators and Guides</h2>
  <p>Choose a related resource when your next question needs a different measurement, material or purchasing method.</p>
  <div className="focused-link-grid">{focused.map(([slug,note])=>{
   const page=pageMap[slug];if(!page)return null;
   return <Link key={slug} href={"/"+slug+"/"}><strong>{page.h1}</strong><span>{note}</span></Link>
  })}</div>
 </section>;
 const groups=[{heading:"Material calculators",pages:materialLinks},{heading:"Unit conversions",pages:conversionLinks},{heading:"Learning guides",pages:guideLinks}];
 return <section className="content-block section-links">
  <div className="section-label">EXPLORE MORE</div><h2>Related Calculators and Guides</h2>
  <p>Continue with a material-specific estimate, convert units, or review the calculation behind your result.</p>
  <div className="resource-columns">{groups.map(group=><div className="resource-group" key={group.heading}>
   <h3>{group.heading}</h3>
   {group.pages.filter(p=>p.slug!==current).map(p=><Link key={p.slug} href={"/"+p.slug+"/"}>{p.h1}<span aria-hidden="true">↗</span></Link>)}
  </div>)}</div>
 </section>;
}

export function GuideBody({page}:{page:PageData}){return <article className="editorial"><div className="key-fact"><strong>Key fact</strong><span>{page.keyFact}</span></div>{page.type==="material"&&<nav className="material-toc" aria-label="On this material guide"><strong>On this page</strong><div>{page.sections.map(s=><a key={s.heading} href={"#"+sectionId(s.heading)}>{s.heading}</a>)}<a href="#material-faqs">Frequently asked questions</a></div></nav>}{page.sections.map(s=><section id={page.type==="material"?sectionId(s.heading):undefined} className="content-block" key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map((p,i)=><p key={i}><RichText value={p}/></p>)}{s.table&&<div className="table-scroll material-table"><table><caption>{s.table.caption}</caption><thead><tr>{s.table.headers.map(h=><th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{s.table.rows.map((r,i)=><tr key={i}>{r.map((v,j)=><td key={j}>{v}</td>)}</tr>)}</tbody></table>{s.table.note&&<p className="table-note">{s.table.note}</p>}</div>}{s.bullets&&<ul>{s.bullets.map((b,i)=><li key={i}><RichText value={b}/></li>)}</ul>}</section>)}{page.slug==="cubic-yard-coverage-chart"&&<CoverageTable/>}<div id={page.type==="material"?"material-faqs":undefined}><FAQ items={page.faqs}/></div></article>}
export function CoverageTable(){return <section className="content-block"><h2>Cubic Yard Coverage Quick Reference</h2><p>Coverage below assumes a uniform layer, with no extra allowance for waste, compaction or settling.</p><div className="table-scroll"><table><thead><tr><th>Depth</th><th>Coverage per 1 yd³</th><th>Coverage per 2 yd³</th></tr></thead><tbody>{[1,2,3,4,6,12].map(d=><tr key={d}><td>{d} {d===1?"inch":"inches"}</td><td>{324/d} sq ft</td><td>{648/d} sq ft</td></tr>)}</tbody></table></div></section>}
