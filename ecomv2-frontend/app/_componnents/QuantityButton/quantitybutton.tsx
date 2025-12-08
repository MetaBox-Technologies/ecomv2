import { useContext, useState } from "react";
import { updateCart, popProductFromCart } from "../Cart/cartContentLoader";
import "./css/quantitybutton.css";
import { Updater } from "../Cart/cartContent";

interface QuantityButtonProps {
    quantity: number,
    isOnCart?:boolean,
    productInfo:{
        id: number,
        color?: string
    }
    width?: number,
    height?: number,
}

export default function QuantityButton({quantity, width=80, height=34, isOnCart=false, productInfo}:Readonly<QuantityButtonProps>) {
    
    const { cartStateUpdater } = useContext(Updater)
    

    const addHander = ()=>{
        if(productInfo && isOnCart) {
            const newCartState = updateCart(productInfo.id, 1, productInfo.color);
            cartStateUpdater(newCartState);
        }
    }

    const removeHandler = () => {
        if(productInfo && isOnCart) {
            if(quantity - 1 > 0) {
                const newCartState = updateCart(productInfo.id, (-1) , productInfo.color);
                cartStateUpdater(newCartState);
            } else {
                const newCartState = popProductFromCart(productInfo.id, productInfo.color);
                cartStateUpdater(newCartState);
            }
        }
    }
    
    

    return (<div className="item-button__quantity" style={{width: `${width}px`, height: `${height}px`}}>
                <button className="material-symbols-outlined hover:cursor-pointer" onClick={removeHandler}>remove</button>
                <p>{quantity}</p>
                <button className="material-symbols-outlined hover:cursor-pointer" onClick={addHander}>add</button>
            </div>)
}