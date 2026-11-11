import type { MetadataRoute } from "next";
import { pages } from "@/lib/pages";
import { SITE } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{
 return [{url:SITE.url+"/",changeFrequency:"weekly",priority:1},...pages.map(page=>({url:SITE.url+"/"+page.slug+"/",changeFrequency:"monthly" as const,priority:page.type==="material"?0.8:page.type==="conversion"?0.8:0.6}))];
}
