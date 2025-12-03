"use client"

import dynamic from "next/dynamic";

export default function ProductDisplay(){
  const dummyProduct = {
    image: { url: "" },
    productName: "Tray Table",
    productDescription: "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    price: 199.00,
    measurements:"17 1/2x20 5/8",
    colour:["black","grey","red","white"],
  };

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

  const ProductCard = dynamic(()=>import('../_components/blocks/ProductCard'), {ssr: false});
  const Reviews = dynamic(()=>import('../_components/blocks/Reviews'), {ssr: false});

  return (
    <main>
      <ProductCard product={dummyProduct} />
      <Reviews reviews={dummyReviews} />
    </main>
  );
}