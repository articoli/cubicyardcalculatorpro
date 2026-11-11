import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const images=JSON.parse(await fs.readFile(new URL("../src/lib/featured-sources.json",import.meta.url),"utf-8"));
const target=path.resolve("public/images/featured");
await fs.mkdir(target,{recursive:true});
let cursor=0;
const errors=[];
async function optimize(bytes){
 let output;
 for(const quality of [73,66,59,53]){
   output=await sharp(bytes).rotate().resize(1120,630,{fit:"cover",position:"attention"}).webp({quality,effort:5}).toBuffer();
   if(output.length<=100*1024)break;
 }
 if(output.length>100*1024){
   output=await sharp(bytes).rotate().resize(960,540,{fit:"cover",position:"attention"}).webp({quality:51,effort:5}).toBuffer();
 }
 return output;
}
async function work(){
 while(cursor<images.length){
  const item=images[cursor++];
  const file=path.join(target,item.slug+".webp");
  try{
   const data=await fs.readFile(file);
   const metadata=await sharp(data).metadata();
   if(metadata.format==="webp"&&metadata.width>=600){console.log("Reused",item.slug);continue;}
  }catch{}
  let saved=false;
  for(let attempt=1;attempt<=3&&!saved;attempt++){
   try{
    const response=await fetch(item.source,{signal:AbortSignal.timeout(18000),headers:{"User-Agent":"CubicYardCalculatorPro/1.0 (image optimization)"}});
    if(!response.ok)throw new Error("HTTP "+response.status);
    const sourceBytes=Buffer.from(await response.arrayBuffer());
    if(sourceBytes.length<1000)throw new Error("Image response is empty");
    const output=await optimize(sourceBytes);
    await fs.writeFile(file,output);
    const meta=await sharp(output).metadata();
    console.log("Created",item.slug,meta.width+"x"+meta.height,Math.round(output.length/1024)+"KB");
    saved=true;
   }catch(error){
    if(attempt===3)errors.push(item.slug+": "+String(error));
    else await new Promise(resolve=>setTimeout(resolve,attempt*750));
   }
  }
 }
}
await Promise.all(Array.from({length:4},()=>work()));
if(errors.length){
 console.error("Featured image generation failed:\n"+errors.join("\n"));
 process.exit(1);
}
