"use client"

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
const ProductCard = dynamic(()=>import('../_componnents/blocks/ProductCard'), {ssr: false});
const Reviews = dynamic(()=>import('../_componnents/blocks/Reviews'), {ssr: false});

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

export default function ProductDisplay(){
  const [dummyProduct, setDummyProduct] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res=await fetch("/dummyProduct.json");
        const data= await res.json();
        setDummyProduct(data[0]);
      } catch (err) {
        console.error("Error loading dummy product JSON:", err);
      }
    };
    fetchData();
  }, []);

  /*const newArrivalsDummy =  await fetchAPI("http://localhost:3000/dummyData.json", {method : "GET"});*/

  return (
    <main>
      <ProductCard product={dummyProduct} />
      <Reviews reviews={dummyReviews} />
    </main>
  );
}