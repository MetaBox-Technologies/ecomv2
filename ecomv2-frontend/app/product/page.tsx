
import dynamic from "next/dynamic";
import { getContent, getReviews } from "../data/loaders";
import { ArticleProps } from "../data/types";
import { PageRenderer } from "@/app/_componnents/blocks/ProductPageRenderer";
import ProductCard from "../_componnents/blocks/ProductCard";
import Reviews from "../_componnents/blocks/Reviews";

//const ProductCard = dynamic(()=>import('../_componnents/blocks/ProductCard'), {ssr: false});
//const Reviews = dynamic(()=>import('../_componnents/blocks/Reviews'), {ssr: false});

const dummyReviews = [
  {
    pfp: { url: "/images/review1.jpg" },
    reviewerName: "Sofia Havertz",
    comment: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
  },
  {
    pfp: { url: "/images/review2.jpg" },
    reviewerName: "Nicolas Jensen",
    comment: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
  },
  {
    pfp: { url: "/images/review3.jpg" },
    reviewerName: "Nicolas Jensen",
    comment: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
  },
];

export default async function ProductDisplay(){
  async function loader() {
        const { data } = await getContent("/api/products");
        return {
          articles: (data as ArticleProps[]) || [],
        };
      }
  const fetchData = async () => {
      try {
        const res=await loader();

        //Searching for the slug name in the url
        const match = res.articles.filter(item =>
          item.ProductId === "bedside-lamp"
        );
      return match;
  
      } catch (err) {
          console.error("Error loading dummy product JSON:", err);
      }
      };
  
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
        reviewerName: r.name,
        comment: r.Comment,
        rating: r.rating,
      }));
    console.log('----the match review')
    console.log(productReviews)

  return (
    <main>
      <PageRenderer product={dummyProduct[0]} reviews={productReviews} productId={dummyProduct[0].id}/>
    </main>
  );
}