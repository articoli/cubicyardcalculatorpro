import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
 metadataBase:new URL(SITE.url),
 title:{default:"Cubic Yard Calculator | Concrete, Gravel, Mulch & More",template:"%s"},
 description:SITE.description,
 applicationName:SITE.name,
 alternates:{canonical:"/"},
 openGraph:{type:"website",siteName:SITE.name,url:SITE.url,title:"Cubic Yard Calculator Pro",description:SITE.description,locale:"en_US"},
 twitter:{card:"summary_large_image"},
 robots:{index:true,follow:true},
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#113a42"};
const siteStructuredData={"@context":"https://schema.org","@type":"WebSite",name:SITE.name,url:SITE.url,description:SITE.description};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><a href="#main" className="skip-link">Skip to main content</a><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(siteStructuredData)}}/></body></html>;
}
