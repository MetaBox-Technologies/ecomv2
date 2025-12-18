import dynamic from "next/dynamic";
import ProductCard from "../../_componnents/blocks/ProductCard";
import Reviews from "../../_componnents/blocks/Reviews";
import { PageRenderer } from "@/app/_componnents/blocks/ProductPageRenderer";

//const ProductCard = dynamic(()=>import('../../_componnents/blocks/ProductCard'), {ssr: false});
//const Reviews = dynamic(()=>import('../../_componnents/blocks/Reviews'), {ssr: false});

export default async function  page({ params }) {
    const  slug  = (await params).slug;

    //Force slug to be a string
    const slugStr = Array.isArray(slug) ? slug[0] : slug;


    const fetchData = async () => {
      try {
          const res=await fetch("http://localhost:3000/dummyProduct.json");
          const data= await res.json();

          //Searching for the slug name in the url
          const match = data.filter((p: any) => p.slug === slugStr);
          return match;

        } catch (err) {
            console.error("Error loading dummy product JSON:", err);
        }
    };

    const fetchReviews = async () => {
      try {
        const res = await fetch("http://localhost:3000/dummyReviews.json");
        const data = await res.json();
        return data;
      } catch (err) {
        console.error("Error loading dummy reviews JSON:", err);
        return [];
      }
    };

    const dummyProduct = await fetchData();
    const allReviews = await fetchReviews();

    const productReviews = allReviews
      .filter((r: any) => r.productId === dummyProduct[0].id)
      .map((r: any) => ({
        pfp: { url: r.pfp },   // convert string → object shape expected by Reviews
        reviewerName: r.reviewerName,
        comment: r.comment,
      }));

    //Product not found
    if (!dummyProduct[0])
      return <h1>Product not found</h1>;
    
    //Product found and display its data and reviews*/
    return(
      <PageRenderer product={dummyProduct[0]} reviews={productReviews} productId={dummyProduct[0].id}/>
    );
}
