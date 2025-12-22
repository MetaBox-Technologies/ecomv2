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

        }
    }
    
    return (<div className="item-button__quantity" style={{width: `${width}px`, height: `${height}px`}}>
                <button className="material-symbols-outlined hover:cursor-pointer" onClick={removeHandler}>remove</button>
                <p>{quantity ? quantity : 1}</p>
                <button className="material-symbols-outlined hover:cursor-pointer" onClick={addHander}>add</button>
            </div>)
}