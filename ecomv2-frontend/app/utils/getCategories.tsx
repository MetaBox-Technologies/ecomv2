import { getProdCategories } from "../data/loaders";
import { CategoryProps } from "../data/types";
import { unique } from "next/dist/build/utils";



export async function ProductCategories() {
  const { data } = await getProdCategories("/api/product-categories");
  return data as CategoryProps[];
}

export async function getCategories() {
  const allArticles = await ProductCategories();
  const categories = allArticles.map(category => category.name);
  return categories
}

