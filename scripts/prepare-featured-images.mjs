import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
const images=JSON.parse(await fs.readFile(new URL("../src/lib/featured-sources.json",import.meta.url),"utf-8"));
const target=path.resolve("public/images/featured");
await fs.mkdir(target,{recursive:true});
let cursor=0,errors=[];
async function work(){
 while(cursor<images.length){
  const item=images[cursor++];
  const file=path.join(target,item.slug+".webp");
  try{
   await fs.access(file);
   const meta=await sharp(file).metadata();
   if(meta.format==="webp" && meta.width>=600){console.log("Reused",item.slug);continue;}
  }catch{}
  let saved=false;
  for(let attempt=1;attempt<=3&&!saved;attempt++){
   try{
    const response=await fetch(item.source,{signal:AbortSignal.timeout(18000),headers:{"User-Agent":"CubicYardCalculatorPro/1.0 (image optimization; contact via website)"}});
    if(!response.ok)throw new Error("HTTP "+response.status);
    const bytes=Buffer.from(await response.arrayBuffer());
    if(bytes.length<1000)throw new Error("Empty image");
    await sharp(bytes).rotate().resize(1120,630,{fit:"cover",position:"attention"}).webp({quality:73,effort:5}).toFile(file);
    const result=await sharp(file).metadata();
    console.log("Created",item.slug,result.width+"x"+result.height);
    saved=true;
   }catch(err){if(attempt===3)errors.push(item.slug+": "+String(err));else await new Promise(r=>setTimeout(r,500*attempt));}
  }
 }
}
await Promise.all(Array.from({length:4},()=>work()));
if(errors.length){console.error("Image generation failed:\n"+errors.join("\n"));process.exit(1);}
