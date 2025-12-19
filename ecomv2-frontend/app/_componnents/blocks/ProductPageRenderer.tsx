"use client"
import dynamic from "next/dynamic";
import { useContext, useMemo } from "react";
import { RootContext } from "@/app/_providers/RootContext";
import QuantityButton from "../QuantityButton/quantitybutton";

interface PageRendererProps{
    product: any,
    reviews:any
    productId: number;
}

export function PageRenderer({product,reviews,productId,name}:Readonly<PageRendererProps>){

    const ProductCard = dynamic(()=>import('../../_componnents/blocks/ProductCard'), {ssr: false});
    const Reviews = dynamic(()=>import('../../_componnents/blocks/Reviews'), {ssr: false});
    console.log('---page renderer')
    console.log(product)

    return (
        <main className="relative top-[105px]">
            <ProductCard product={product} />
            <Reviews reviews={reviews} productId={productId} name={name}/>
        </main>
    );
}