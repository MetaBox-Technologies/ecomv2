"use client"

import "./css/cart.css"
import {useEffect, createRef, useContext } from "react";
import React from "react";
import { RootContext } from "@/app/_providers/RootContext";
import { CartContent } from "./cartContent";


export function Cart ({isOpen}) {
    
    const divRef = createRef();
    const { isCartOpen } = useContext(RootContext);
    
    async function closeCart() {
        if(!divRef.current?.classList.contains("translate-x-100")){
            divRef.current?.classList.toggle("translate-x-100");
        }
        await new Promise<void>((resolve)=>{
            setTimeout(()=>{
                isCartOpen(false);
                resolve();
            }, 100);
        });
    }

    async function clickHandler(event:Event) {
        if(divRef.current &&  !divRef.current.contains(event.target as Node)) {
            console.log('clicked outside');
            await closeCart();
        }
    }

    

    useEffect(()=>{
            setTimeout(()=>{
                divRef.current?.classList.toggle("translate-x-100");
            }, 100);
        return async()=>{
            
        }
    }, [isOpen])


    return (
        <>
            {isOpen &&(
                <div className="cart" onClick={clickHandler}>
                <CartContent ref={divRef} cStatic/>
                </div>
                    
            )}
        </>
      )
};