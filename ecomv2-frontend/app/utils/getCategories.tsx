import { getArticles } from "../data/loaders";
import { ArticleProps } from "../data/types";
import { unique } from "next/dist/build/utils";

export async function articles() {
  const { data } = await getArticles("/api/products");
  return data as ArticleProps[];
}

export async function getCategories() {
  const allArticles = await articles();
  const categories = allArticles.map(article => article.category);
  const uniqueCategories = [...new Set(categories)];
  return uniqueCategories;
}

export async function main(){
    const uniquecategories=await getCategories()
}