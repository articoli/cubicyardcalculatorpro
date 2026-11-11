export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { pages } from "@/lib/pages";
import { SITE } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{
 return [{url:SITE.url+"/",changeFrequency:"weekly",priority:1},{url:SITE.url+"/guides/",changeFrequency:"monthly",priority:0.75},...pages.map(page=>({url:SITE.url+"/"+page.slug+"/",changeFrequency:"monthly" as const,priority:page.type==="material"?0.8:page.type==="conversion"?0.8:0.6})),...["privacy-policy","terms-of-use","disclaimer"].map(s=>({url:SITE.url+"/"+s+"/",changeFrequency:"yearly" as const,priority:0.2}))];
}
