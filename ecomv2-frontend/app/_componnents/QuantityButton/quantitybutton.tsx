"use client"

import { useContext, useState } from "react";
import { updateCart, popProductFromCart } from "../Cart/cartContentLoader";
import "./css/quantitybutton.css";
import { RootContext } from "@/app/_providers/RootContext";

interface QuantityButtonProps {
    quantity: number,
    isOnCart?:boolean,
    productInfo:{
        id: number,
        color?: string
    }
    onAddNew?: () => void;
    width?: number,
    height?: number,
}

export default function QuantityButton({quantity, width=80, height=34, isOnCart=false, productInfo,onAddNew}:Readonly<QuantityButtonProps>) {
    
    const { cartUpdater } = useContext(RootContext)

    console.log("quantityButton is on cart: ",isOnCart);    

    const addHander = ()=>{
        if(productInfo && isOnCart) {
            const newCartState = updateCart(productInfo.id, 1, productInfo.color);
            cartUpdater(newCartState);
        }else {
            if (onAddNew) {
                //not in cart → add new product(use parent callback if available)
                onAddNew();
            } else {
                //do nothing
                console.log("No onAddNew function passed, cannot add new product from here");
            }
        }
    }

    const removeHandler = () => {
        if(productInfo && isOnCart) {
            if(quantity - 1 > 0) {
                const newCartState = updateCart(productInfo.id, (-1) , productInfo.color);
                cartUpdater(newCartState);
            } else {
                const newCartState = popProductFromCart(productInfo.id, productInfo.color);
                cartUpdater(newCartState);
            }
        }else {
            console.log("No onAddNew function passed, cannot add new product from here");
        }
    }
    
    return (<div className="item-button__quantity" style={{width: `${width}px`, height: `${height}px`}}>
                <button className="material-symbols-outlined hover:cursor-pointer" onClick={removeHandler}>remove</button>
                <p>{quantity}</p>
                <button className="material-symbols-outlined hover:cursor-pointer" onClick={addHander}>add</button>
            </div>)
}