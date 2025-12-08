"use client";
import{useContext, useRef, useState} from "react";
import { ImageProps} from "../../data/types"
import Link from "next/link";
import { StrapiImage } from "../strapiImage";
import StarRating from "./StarRating";
import { cartloader, Product, pushProductToCart, updateCart} from "../Cart/cartContentLoader";
import { url } from "inspector";
import { RootContext } from "@/app/_providers/RootContext";

export interface CardProps {
  id: number,
  documentId: string;
  name: string;
  shortDescription: string;
  images: ImageProps[];
  price: number;
  rating: number;
  createdAt: string;
  percentagediscount: number;
  Is_new:boolean;
  category: string;
  isOnHome?: boolean;
}

export function Card({
  id,
  name,
  shortDescription,
  images,
  price,
  rating,
  createdAt,
  percentagediscount,
  Is_new,
  category,
  isOnHome = false
}: Readonly<CardProps>) {
  const [showActions, setShowActions] = useState(false);
  const addToCartBtnRef = useRef(null);
  const { isCartOpen } = useContext( RootContext );

  const pushNewPorduct = (productToPush: Product) => {
    addToCartBtnRef.current.querySelector("h4").innerText = "Added";
    pushProductToCart(productToPush);
    setTimeout(()=>{
      addToCartBtnRef.current.querySelector("h4").innerText = "Add to Cart";
      isCartOpen(true);
    }, 200);
  }

  const addToCartHandler = ()=>{
    
    const cartContent = cartloader();
    console.log(cartContent);
    const productToPush = {
          id: id,
          prodName: name,
          prodPrice: price,
          quantity: 1,
          image: {
            url: images[0].url,
            alt: images[0].alternativeText
          },
          color: "default"
        }
    if(cartContent.length > 0) {
      
      const isArticleInside =  cartContent.filter((article)=> article.id === id).length > 0;
      
      if(isArticleInside) {
        updateCart(id, 1 , "default");
        addToCartBtnRef.current.querySelector("h4").innerText = "+1";
        setTimeout(()=>{
          addToCartBtnRef.current.querySelector("h4").innerText = "Add to Cart";
        }, 200);
      }
      else
        pushNewPorduct(productToPush)


    }else {
        pushNewPorduct(productToPush)
     }

    
  }

  return (
    <div className={isOnHome ? "w-[full] flex-shrink-0 md:w-full flex flex-col items-start gap-3" : ""}>
      <div className="relative inline-block hover:cursor-pointer"
         onMouseEnter={()=>{
          setShowActions(true);
          setTimeout(()=>{
            addToCartBtnRef.current?.classList.add("bottom-[5%]");
            addToCartBtnRef.current?.classList.add("opacity-[100%]");
          }, 150);

        }}
         onMouseLeave={()=>{
          
          addToCartBtnRef.current?.classList.remove("bottom-[5%]");
          addToCartBtnRef.current?.classList.remove("opacity-[100%]");
          setTimeout(()=>{
            setShowActions(false)
          }, 150)
        }}
         /*onClick={()=>setShowActions(!showActions)*}*/>
        {Is_new && <div className="lg:w-[60px] lg:h-[30px] md:w-[52px] md:h-[25px] w-[45px] h-[20px] absolute top-[5%] left-[5%] bg-white rounded"><h1 className="font-semibold md:text-base lg:text-lg test-sm text-center">NEW</h1></div>}
        {percentagediscount>0 && (<div className={`lg:w-[60px] lg:h-[30px] md:w-[52px] md:h-[25px] w-[45px] h-[20px]  absolute ${Is_new? "top-[2.4rem] sm:top-[16%] md:top-[16%] lg:top-[17%] xl:top-[15%]" : "top-[5%]"} left-[5%] bg-[#38CB89] rounded`}><h1 className="font-semibold text-white md:text-base lg:text-lg text-sm text-center">-{percentagediscount}%</h1></div>)}
       

        <StrapiImage
          src={images[0].url}
          alt={images[0].alternativeText || "No alternative text provided"}
          width={400}
          height={400}
        />
        {showActions && <div ref={addToCartBtnRef} onClick={addToCartHandler} className={`w-[90%] left-1/2 -translate-x-1/2 md:px-[24px] md:py-[8px] px-[16px] py-[4px] absolute bottom bottom-[0%] bg-black rounded-lg transition-[all] duration-300 ease-in-out opacity-0 hover:scale-105 ${isOnHome? "!bg-[var(--blue-btn)]": ""}`}><h4 className="md:text-xl text-[15px] text-white text-center" style={{fontFamily:"var(--font-inter)"}}>Add to Cart</h4></div>}
      </div>
      <div className={`flex flex-col gap-1 h-fit  ${isOnHome ? "": "mt-3"}`} style={{fontFamily:"var(--font-inter)"}}>
        <StarRating rating={3.7} color={isOnHome ? "#ffc554" : "var(--neutral-5)"}/>
        <h5 className={`font-[600] font-semibold leading-[24px]  ${isOnHome ? "text-[#31393B]": "text-var(--neutral-7)"}`}>{name}</h5>
        {percentagediscount > 0 && <div className="flex gap-2">
                                        <p className="text-[14px] font-[600] font-semibold leading-[22px]" style={{fontFamily:"var(--font-inter)"}}>${ (price * ((100 - percentagediscount) / 100)).toFixed(2) }</p>
                                        <p className="line-through text-[var(--neutral-4)] text-[14px] font-[400] text-sm leading-[22px]" style={{fontFamily:"var(--font-inter)"}}> ${price}</p>
                                     </div>} 
        {percentagediscount === 0 && <p className={"text-[14px] font-[600] font-semibold leading-[22px]" + (isOnHome ? " text-left": "")}>${price}</p>}
      </div>
    </div>
  );
}