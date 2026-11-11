import fs from "node:fs/promises";
import path from "node:path";

const materialPages=[
 "concrete-cubic-yard-calculator",
 "gravel-cubic-yard-calculator",
 "mulch-cubic-yard-calculator",
 "topsoil-cubic-yard-calculator",
 "fill-dirt-cubic-yard-calculator",
];
const conversionPages=[
 "cubic-feet-to-cubic-yards",
 "square-feet-to-cubic-yards",
 "cubic-yards-to-tons",
 "cubic-meters-to-cubic-yards",
];
const failures=[];
const checks=[];

for(const slug of [...materialPages,...conversionPages]){
 const filename=path.resolve("out",slug,"index.html");
 let html;
 try{html=await fs.readFile(filename,"utf8");}
 catch{failures.push(slug+": missing static HTML page");continue;}
 const visible=html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi," ")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi," ");
 const plain=visible.replace(/<[^>]*>/g," ").replace(/&[#\w]+;/g," ").replace(/\s+/g," ").trim();
 const words=plain.split(/\s+/).filter(Boolean).length;
 const h1=(visible.match(/<h1\b/gi)||[]).length;
 const h2=(visible.match(/<h2\b/gi)||[]).length;
 const faq=(visible.match(/<details\b/gi)||[]).length;
 const headings=[...visible.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)]
  .map(m=>m[1].replace(/<[^>]*>/g,"").replace(/&amp;/g,"&").trim().toLowerCase());
 const duplicate=headings.filter((h,i)=>h&&headings.indexOf(h)!==i);
 const minWords=materialPages.includes(slug)?1100:500;
 const minH2=materialPages.includes(slug)?9:7;
 if(words<minWords)failures.push(slug+": only "+words+" visible words, expected at least "+minWords);
 if(h1!==1)failures.push(slug+": "+h1+" H1 headings (expected exactly one)");
 if(h2<minH2)failures.push(slug+": only "+h2+" H2 headings (expected at least "+minH2+")");
 if(faq<5)failures.push(slug+": "+faq+" FAQ details (expected at least 5)");
 if(duplicate.length)failures.push(slug+": duplicated H2 "+[...new Set(duplicate)].join("; "));
 if(!html.includes('name="description"'))failures.push(slug+": missing meta description");
 if(!html.includes('rel="canonical"'))failures.push(slug+": missing canonical");
 if(!html.includes("/images/featured/"+slug+".webp"))failures.push(slug+": missing featured WebP reference");
 if(!visible.includes("focused-link-grid"))failures.push(slug+": missing topical related-link module");
 if(!visible.includes("<table"))failures.push(slug+": no table or comparison chart");
 checks.push({slug,words,h1,h2,faq});
}
for(const row of checks)console.log(row.slug+": "+row.words+" words, "+row.h2+" H2s, "+row.faq+" FAQs");
if(failures.length){
 console.error("SEO content QA failed:\n"+failures.map(f=>" - "+f).join("\n"));
 process.exit(1);
}
console.log("SEO content QA passed for "+checks.length+" calculator pages.");
