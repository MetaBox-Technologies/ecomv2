"use client";
import{useContext, useEffect, useRef, useState} from "react";
import { ImageProps} from "../../data/types"
import Link from "next/link";
import { StrapiImage } from "../strapiImage";
import StarRating from "./StarRating";
import { cartloader, Product, pushProductToCart, updateCart} from "../Cart/cartContentLoader";
import { url } from "inspector";
import { RootContext } from "@/app/_providers/RootContext";
import Image from "next/image";
import './description.css';
import { GetStrapiURL } from "@/app/utils/get-strapi-url";
import { getReviews } from "@/app/data/loaders";

export interface CardProps {
  id: number,
  documentId: string;
  name: string;
  ProductId: string;
  description: string;
  images: any;
  price: number;
  createdAt: string;
  percentagediscount: number;
  Is_new:boolean;
  category: string;
  isOnHome?: boolean;
  allReviews:anyM
  colour: String[]
  stock: number
}

export function Card({
  id,
  documentId,
  title,
  ProductId,
  description,
  images,
  price,
  createdAt,
  PercentageDiscount,
  isOnHome = false,
  allReviews,
  colour,
  stock

}: Readonly<CardProps>) {

  const before = new Date("2025-08-01");
  const prodDate = new Date(createdAt);
  const isNew = prodDate > before;
  const [showActions, setShowActions] = useState(false);
  const addToCartBtnRef = useRef(null);
  const { isCartOpen, cartUpdater } = useContext( RootContext );


  const pushNewPorduct = (productToPush: Product) => {
    if(addToCartBtnRef.current)
      addToCartBtnRef.current.querySelector("h4").innerText = "Added";
      cartUpdater(pushProductToCart(productToPush));
    setTimeout(()=>{
      if(addToCartBtnRef.current)
        addToCartBtnRef.current.querySelector("h4").innerText = "Add to Cart";
      isCartOpen(true);
    }, 200);
  }

  const addToCartHandler = ()=>{

    if(stock === 0)
      return;
    const cartContent = cartloader();
    const productToPush = {
          id: documentId,
          prodName: title,
          prodPrice: price,
          quantity: 1,
          image: images?.url
          ? {
          url: images.url,
          alt: images.alternativeText ?? "",
          }
          : null,
          color: colour ? colour[0].name : "default",
          max: stock
        }
    if(cartContent.length > 0) {
      
      const isArticleInside =  cartContent.filter((article)=> article.id === documentId).length > 0;  
      if(isArticleInside) {
        const quantityInside = cartContent.filter((article)=> article.id === documentId )[0].quantity;
        if(quantityInside + 1 > stock) {
          if(addToCartBtnRef.current)
            addToCartBtnRef.current.querySelector("h4").innerText = "Max";
        setTimeout(()=>{
          if(addToCartBtnRef.current)
            addToCartBtnRef.current.querySelector("h4").innerText = "Add to Cart";
        }, 200);
          return
        }
        
        
        cartUpdater(updateCart(documentId, 1 , (colour[0].name ? colour[0].name : "default")));
        if(addToCartBtnRef.current)
            addToCartBtnRef.current.querySelector("h4").innerText = "+1";
        setTimeout(()=>{
          if(addToCartBtnRef.current)
            addToCartBtnRef.current.querySelector("h4").innerText = "Add to Cart";
        }, 200);
      }
      else
        pushNewPorduct(productToPush)


    }else {
        pushNewPorduct(productToPush)
     }
  }
  const productReviews = allReviews
      .filter((r: any) => r.productId.id === id)
      .map((r: any) => ({
        rating: r.rating,
      }));
      const avgRating =
      productReviews.length === 0 ? 0
      :Math.round(productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length);

  return (
    <div className={`flex sm:flex-col  gap-3 sm:gap-0 ${isOnHome ? "w-[231px] md:w-[262px] flex-shrink-0 flex flex-col items-start gap-3" : ""}`}>
      <div className={` relative w-[100%] border-1 border-gray-200 hover:cursor-pointer rounded-3xl overflow-hidden ${isOnHome ? "h-[308px] md:h-[349px border-1 border-black]" : "sm:h-[200px] lg:h-[300px] xl:h-[350px] bg-white"}`}
          style={images?.url?{
                  backgroundImage: `url("https://strapi.ecomv2.online${images.url}")`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }: undefined
                }
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
        <Link href={`/product/${ProductId}`} className='relative block w-full h-full prod-bg'>
        {isNew && <div className="pointer-events-none lg:w-[60px] lg:h-[30px] md:w-[52px] md:h-[25px] w-[45px] h-[20px] absolute top-[5%] left-[5%] bg-white rounded"><h1 className="font-semibold md:text-base lg:text-lg test-sm text-center">NEW</h1></div>}
        {PercentageDiscount>0 && (<div className={`pointer-events-none lg:w-[60px] lg:h-[30px] md:w-[52px] md:h-[25px] w-[45px] h-[20px]  absolute ${isNew? "top-[2.8rem] sm:top-[19%] md:top-[20%] lg:top-[19%] xl:top-[17%]" : "top-[5%]"} left-[5%] bg-[#38CB89] rounded`}><h1 className="font-semibold text-white md:text-base lg:text-lg text-sm text-center">-{PercentageDiscount}%</h1></div>)}
       

        {/*<StrapiImage
          src={images.url}
          alt={images.alternativeText || "No alternative text provided"}
          width={400}
          height={400}
          className="w-full h-full object-contain"
        />*/}
        </Link>
        {(showActions && stock > 0) && <div ref={addToCartBtnRef} onClick={addToCartHandler} className={`hidden lg:block w-[90%] left-1/2 -translate-x-1/2 lg:px-[24px] lg:py-[8px] px-[16px] py-[4px] absolute bottom bottom-[0%] bg-black rounded-lg transition-[all] duration-300 ease-in-out opacity-0 hover:scale-105 ${isOnHome? "!bg-[var(--blue-btn)]": ""}`}><h4 className="lg:text-xl text-[15px] text-white text-center" style={{fontFamily:"var(--font-inter)"}}>Add to Cart</h4></div>}
        {stock > 0 && <div ref={addToCartBtnRef} onClick={addToCartHandler} className={`hidden sm:block lg:hidden w-[90%] left-1/2 -translate-x-1/2 px-[16px] py-[2px] absolute bottom bottom-[5%] bg-[var(--neutral-7)] border-[0.2px] border-[transparent] rounded-lg transition-[all] duration-300 ease-in-out  border-2 hover:scale-105 ${isOnHome? "!bg-[var(--blue-btn)]": ""}`}><h4 className="lg:text-xl text-[15px] text-white text-center" style={{fontFamily:"var(--font-inter)"}}>Add to cart</h4></div>}
        {stock === 0 && <div ref={addToCartBtnRef} className={`w-[90%] left-1/2 -translate-x-1/2 px-[16px] py-[2px] absolute bottom bottom-[5%] bg-[transparent] border-[0.2px] border-[transparent] rounded-lg transition-[all] duration-300 ease-in-out  border-2 hover:scale-105 ${isOnHome? "!bg-[var(--blue-btn)]": ""}`}><h4 className="lg:text-xl text-[15px] text-[var(--neutral-7)] text-center" style={{fontFamily:"var(--font-inter)"}}>Out of stock</h4></div>}
      </div>
      
      <div className={`relative pb-[50px] p-[3%] w-[100%] ${isOnHome ? "": ""}`} style={{fontFamily:"var(--font-inter)"}}>
        <div className="text-[30px] sm:text-[18px]">
        <StarRating rating={avgRating} color={isOnHome ? "#ffc554" : "var(--neutral-5)"}/>
        </div>
        <Link href={`/product/${ProductId}`}> <h5 className={`text-left font-[600] mt-[2%] font-semibold leading-[24px] transiton-all duration-300 ease in out hover:scale-[1.05] ${isOnHome ? "text-[#31393B]": "text-var(--neutral-7)"}`}>{title}</h5></Link>
        {PercentageDiscount > 0 && <div className="flex gap-2">
                                        <p className="text-[14px] font-[600] font-semibold leading-[22px]" style={{fontFamily:"var(--font-inter)"}}>MUR { (price * ((100 - PercentageDiscount) / 100)).toFixed(2) }</p>
                                        <p className="line-through text-[var(--neutral-4)] text-[14px] font-[400] text-sm leading-[22px]" style={{fontFamily:"var(--font-inter)"}}> MUR {price}</p>
                                     </div>} 
        {PercentageDiscount === 0 && <p className={"text-[14px] font-[600] font-semibold leading-[22px]" + (isOnHome ? " text-left": "")}>MUR {price}</p>}
          <div className={`sm:hidden ${isOnHome ? "hidden" : "block"}  text-gray-600 mt-1 text-[12px] clamp-5`}>
            {description.map((block, i) => (
            <p className={`sm:hidden ${isOnHome ? "hidden" : ""}`} key={i}>
                {block.children.map(child => child.text).join("")}
            </p>
            ))}
          </div>
        {stock > 0 && <div onClick={addToCartHandler} className={` ${isOnHome ? "hidden" : ""} sm:hidden absolute w-[90%] left-1/2 -translate-x-1/2 absolute bottom bottom-[2%] bg-black rounded-lg  py-[2px]
                                        `}><h4 className="text-white text-center ">Add to Cart</h4></div>}                             
      </div>
    </div>
  );
}