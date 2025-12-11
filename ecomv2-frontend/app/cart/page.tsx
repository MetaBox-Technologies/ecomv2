"use client"

import "./page.css";
import { StepperDesktop } from "../_componnents/Cart/stepperDesktop";
import Link from "next/link";
import dynamic from "next/dynamic";
import React from "react";
import CheckoutForm from "../_componnents/Cart/checkoutForm";



export default function CartPage(){
    
    const Loader:React.FunctionComponent = ()=>{
        return(
        <div className="load-wraper">
            <div className="activity"></div>
        </div>)        
    }

    const CartTable = dynamic(()=> import("../_componnents/Cart/cartTable"), {ssr: false, loading: Loader});

   

    
    return (
        <div className="flex flex-col pb-[80px] lg:items-center xl:px-[160px] lg:pt-[80px] w-100vw">
            <div id="page-header">
                <Link className="breadcrumbs" href={"/"}>
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                    <p>Back</p>
                </Link>
                <header>
                    <h2>Cart</h2>
                    <StepperDesktop/>
                </header>
            </div>
            <main>
                <CheckoutForm/>
            </main>
        </div>
    )
}


