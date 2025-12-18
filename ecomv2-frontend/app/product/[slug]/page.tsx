import dynamic from "next/dynamic";
import ProductCard from "../../_componnents/blocks/ProductCard";
import Reviews from "../../_componnents/blocks/Reviews";
import { PageRenderer } from "@/app/_componnents/blocks/ProductPageRenderer";
import { getContent, getReviews } from "@/app/data/loaders";
import { ArticleProps } from "@/app/data/types";
//const ProductCard = dynamic(()=>import('../../_componnents/blocks/ProductCard'), {ssr: false});
//const Reviews = dynamic(()=>import('../../_componnents/blocks/Reviews'), {ssr: false});

export default async function  page({ params }) {
    const  slug  = (await params).slug;

    //Force slug to be a string
    const slugStr = Array.isArray(slug) ? slug[0] : slug;

    async function loader(query? :string) {
      const { data } = await getContent("/api/products",query);
      return {
        articles: (data as ArticleProps[]) || [],
      };
    }
    const fetchData = async () => {
      try {
          const res=await loader();
          //Searching for the slug name in the url
          const match = res.articles.filter(item =>
            item.ProductId === slugStr
          );

          return match;

        } catch (err) {
            console.error("Error loading dummy product JSON:", err);
        }
    };
    /*
    async function reviewsloader(productId? :string) {
      const { data } = await getReviews("/api/review-webs");
      return {
        data
      };
    }*/
    const fetchReviews = async () => {
      try {
        const review = await getReviews();
        console.log('------reviews 2');
        return review.data;
      } catch (err) {
        console.error("Error loading dummy reviews JSON:", err);
        return [];
      }
    };

    const dummyProduct = await fetchData();
    const allReviews = await fetchReviews();
    const productReviews = allReviews
      .filter((r: any) => r.productId.id === dummyProduct[0].id)
      .map((r: any) => ({
        pfp: { url: r.pfp.url},  
        reviewerName: r.name,
        comment: r.Comment,
      }));
    console.log('----the match review')
    console.log(productReviews)
    //Product not found
    if (!dummyProduct[0])
      return <h1>Product not found</h1>;
    //Product found and display its data and reviews*/
    return(
      <PageRenderer product={dummyProduct[0]} reviews={productReviews} productId={dummyProduct[0].id}/>
    );
}
