import type {Metadata} from "next";
import {LegalArticle} from "@/components/LegalArticle";
import {legalDocuments} from "@/lib/legal-content";
export const metadata:Metadata={title:"Privacy Policy",description:legalDocuments["privacy-policy"].description,alternates:{canonical:"/privacy-policy/"}};
export default function Page(){return <LegalArticle slug="privacy-policy"/>;}
