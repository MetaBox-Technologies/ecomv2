import { ArticleProps } from "@/app/data/types";
import { getContent } from "@/app/data/loaders";
import { ProductListClient } from "./ProductListClient";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getReviews } from "@/app/data/loaders";

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
  const fetchReviews = async () => {
        try {
          const review = await getReviews();
          return review.data;
        } catch (err) {
          console.error("Error loading dummy reviews JSON:", err);
          return [];
        }
      };
  
      const allReviews = await fetchReviews();
  
 return (
    <ProductListClient
      component={component}
      articles={articles}
      uniquecategories={uniquecategories}
      allReviews={allReviews}
    />
 )
}