export type ExpansionArticle={
 category:string;
 readTime:string;
 lead:string;
 sections:{
   heading:string;
   paragraphs:string[];
   table?:{caption:string;heads:string[];rows:string[][]};
   bullets?:string[];
 }[];
 faqs:{question:string;answer:string}[];
 sources:[string,string][];
};
import {articlesA} from "./expansion-articles-a";
import {articlesB} from "./expansion-articles-b";
import {articlesC} from "./expansion-articles-c";
export const expansionArticles:Record<string,ExpansionArticle>={...articlesA,...articlesB,...articlesC};
