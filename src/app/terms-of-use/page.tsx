import type {Metadata} from "next";
import {LegalArticle} from "@/components/LegalArticle";
import {legalDocuments} from "@/lib/legal-content";
export const metadata:Metadata={title:"Terms of Use",description:legalDocuments["terms-of-use"].description,alternates:{canonical:"/terms-of-use/"}};
export default function Page(){return <LegalArticle slug="terms-of-use"/>;}
