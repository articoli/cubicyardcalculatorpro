import type {Metadata} from "next";
import {LegalArticle} from "@/components/LegalArticle";
import {legalDocuments} from "@/lib/legal-content";
export const metadata:Metadata={title:"Disclaimer",description:legalDocuments["disclaimer"].description,alternates:{canonical:"/disclaimer/"}};
export default function Page(){return <LegalArticle slug="disclaimer"/>;}
