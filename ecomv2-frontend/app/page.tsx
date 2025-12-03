"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, Ref, useEffect } from "react";
import { Service } from "./_componnents/services/services";
import MySwiper from "./_componnents/HeroSection/swiper";
//async function openCart(cart : HTMLDivElement) { //function that open up Cart 
  
  //cart.parentElement?.classList.toggle("hidden");// removing class hidden
  
  /*await new Promise(()=>{
    setTimeout(() => {
      cart.parentElement?.classList.toggle("translate-x-[100%]"); //delaying animation
    },200);
  });*/

//}

/*async function closeCart(cart : HTMLDivElement) {
  cart.parentElement?.classList.toggle("translate-x-[100%]");
  await new Promise(()=>{
    setTimeout(() => {
      cart.parentElement?.classList.toggle("hidden"); //delaying animation
    },500);
  });
  
}


async function cartHandler(cart : HTMLDivElement, isOpen:boolean) {
  if(!isOpen){
     await openCart(cart);
     return;
  }
  await closeCart(cart);
}

export default function Home() {
  
  const cartRef = useRef<HTMLDivElement>(null);
  const isOpen = useRef(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  

  useEffect(()=>{
    const handelClick = async (event :Event) => { 
      if(
        (buttonRef.current && buttonRef.current === event.target) 
        && (cartRef.current != null)
      ) {
        isOpen.current = true; 
        await cartHandler(cartRef.current, Boolean(!isOpen.current));
        return;
       } 
       
      if(isOpen.current && 
        (cartRef.current && cartRef.current !== event.target)) 
        { 
          isOpen.current = false; 
          await cartHandler(cartRef.current, Boolean(!isOpen.current)); 
          return; 
        }
      }

    document.addEventListener("click", handelClick);

    return ()=>{
      document.removeEventListener("click", handelClick)
    }

  },[])
  
  return (
    <main className="h-screen">
      <button ref={buttonRef}> Open Cart </button>
    </main>
  );
}*/

export default function Home() {
  return(
    <>
    <MySwiper/>
    <Service/>
    <Link href="/shop">Shop page</Link>
    </>
  )
}