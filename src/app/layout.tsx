import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Header, Footer } from "@/components/SiteChrome";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
 metadataBase:new URL(SITE.url),
 title:{default:"Cubic Yard Calculator | Concrete, Gravel, Mulch & More",template:"%s"},
 description:SITE.description,
 applicationName:SITE.name,
 verification:{google:"eM680CswFA2LdOOmmyARNVIiVS-ihjKfUkVwaHpZQac"},
 icons:{
  icon:[{url:"/favicon.svg",type:"image/svg+xml",sizes:"any"},{url:"/favicon-32x32.png",type:"image/png",sizes:"32x32"},{url:"/favicon-16x16.png",type:"image/png",sizes:"16x16"}],
  apple:[{url:"/apple-touch-icon.png",type:"image/png",sizes:"180x180"}],
 },
 alternates:{canonical:"/"},
 openGraph:{type:"website",siteName:SITE.name,url:SITE.url,title:"Cubic Yard Calculator Pro",description:SITE.description,locale:"en_US"},
 twitter:{card:"summary_large_image"},
 robots:{index:true,follow:true},
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#113a42"};
const siteStructuredData={"@context":"https://schema.org","@type":"WebSite","@id":SITE.url+"/#website",name:SITE.name,url:SITE.url+"/",description:SITE.description,inLanguage:"en-US"};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en">
  <head>
    {/* Tag Manager is injected after hydration so it does not block first render. */}
    <Script id="gtm-data-layer" strategy="afterInteractive">{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
`}</Script>
    <Script id="google-tag-manager" src="https://www.googletagmanager.com/gtm.js?id=GTM-W8X7R5CQ" strategy="afterInteractive"/>
  </head>
  <body><a href="#main" className="skip-link">Skip to main content</a><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(siteStructuredData)}}/></body>
 </html>;
}
