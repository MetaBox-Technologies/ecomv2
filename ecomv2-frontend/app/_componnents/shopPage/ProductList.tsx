import { ArticleProps } from "@/app/data/types";
import { getContent } from "@/app/data/loaders";
import { ProductListClient } from "./ProductListClient";

interface ContentListProps {
  headline: string;
  component: React.ComponentType<ArticleProps>;
  query?: string;
  uniquecategories:string[];
}


async function loader(query? :string) {
  const { data } = await getContent("/api/products",query);
  return {
    articles: (data as ArticleProps[]) || [],
  };
}

export async function ProductList({
  headline,
  component,
  query,
  uniquecategories,
}: Readonly<ContentListProps>) {
  const { articles } = await loader(query);
 return (
    <ProductListClient
      headline={headline}
      component={component}
      articles={articles}
      uniquecategories={uniquecategories}
    />
 )
}