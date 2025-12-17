"use client"

import "./page.css";
import { StepperDesktop } from "../_componnents/Cart/stepperDesktop";
import Link from "next/link";
import Row from "../_componnents/Cart/row";
import { Cell } from "../_componnents/Cart/cell";
import dynamic from "next/dynamic";
import { CartContent } from "../_componnents/Cart/cartContent";
import {CheckoutForm} from "../_componnents/Cart/checkoutForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProdDetailProps {
        image: {
            src:string,
            alt?:string
        },
        itemName: string,
        itemColor: string,
        itemPrice: number,
        quantity: number
    }

export default function CartPage(){
    

    const prodDetails:ProdDetailProps = {
        image : {
            src:'/images/products/TABLE.JPG',
            alt:''
        },
        itemColor: 'black',
        itemName: 'Tray Table',
        itemPrice: 19.00,
        quantity:3
    };

    const cell:React.FC<ProdDetailProps> = (props)=>{
        return <Cell {...props}/>
    };
    
    const row:React.FC<ProdDetailProps> = (props)=>{
        return <Row {...props}/>
    };
    
    
    const router = useRouter()
    

    useEffect(()=>{
        router.replace("/cart");
    })
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
            </main>
        </div>
    )
}


