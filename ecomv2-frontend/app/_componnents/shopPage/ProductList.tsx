import { ArticleProps } from "@/app/data/types";
import { getContent } from "@/app/data/loaders";
import { ProductListClient } from "./ProductListClient";
import { fetchAPI } from "@/app/utils/fetch-api";

interface ContentListProps {
  component: React.ComponentType<ArticleProps>;
  query?: string;
  uniquecategories:string[];
}


async function loader(query? :string) {
  const { data } = await getContent("/api/products",query);
  console.log(data)
  return {
    articles: (data as ArticleProps[]) || [],
  };
}

export async function ProductList({
  component,
  query,
  uniquecategories,
}: Readonly<ContentListProps>) {
  const { articles } = await loader(query);
 return (
    <ProductListClient
      component={component}
      articles={articles}
      uniquecategories={uniquecategories}
    />
 )
}