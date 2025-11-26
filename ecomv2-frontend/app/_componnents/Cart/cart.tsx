"use client"

import "./css/cart.css"
import {useEffect, createRef, useContext } from "react";
import React from "react";
import { RootContext } from "@/app/_providers/RootContext";
import Cell from "./cell";
import Link from "next/link";

export const Cart = React.memo(({isOpen})=> {
    
    const divRef = createRef();
    const { isCartOpen } = useContext(RootContext);
    
    async function closeCart() {
        
        divRef.current?.classList.toggle("translate-x-100");
        
        await new Promise<void>((resolve)=>{
            setTimeout(()=>{
                isCartOpen(false);
                resolve();
            }, 400);
        });
    }

    async function clickHandler(event:Event) {
        if(divRef.current &&  !divRef.current.contains(event.target as Node)) {
            console.log('clicked outside');
            await closeCart();
        }
    }

    

    useEffect(()=>{
        divRef.current?.classList.toggle("translate-x-100");
        return ()=>{
            
        }
    }, [isOpen])

    

    return (
        <>
            {isOpen &&(
                <div className="cart" onClick={clickHandler}>
                overlay
                <div className="cart-content translate-x-100" ref={divRef}>
                    <div className="summary__items">
                        <div className="summary__items-headline">
                            <h5>Cart</h5>
                            <button>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="items-list">
                            <Cell 
                                image={{src:"/images/products/TABLE.jpg"}}
                                itemName="Tray Table"
                                itemColor="black"
                                itemPrice={19.19}
                                quantity={2}
                            />
                            <Cell 
                                image={{src:"/images/products/TABLE.jpg"}}
                                itemName="Tray Table"
                                itemColor="black"
                                itemPrice={19.19}
                                quantity={2}
                            />
                            <Cell 
                                image={{src:"/images/products/TABLE.jpg"}}
                                itemName="Tray Table"
                                itemColor="black"
                                itemPrice={19.19}
                                quantity={2}
                            />
                        </div>
                        
                    </div>
                    <div className="summary__counts">
                        <div className="fields">
                            <div className="fields__subtotal">
                                <p>Subtotal</p>
                                <p className="number">${(19.19*3).toFixed(2)}</p>
                            </div>
                            <div className="fields__total">
                                <p style={ { fontWeight :"400",} }>Total</p>
                                <p>${(19.19*3).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <Link href={"/checkout"} className="buttons__checkout">
                                <p>Checkout</p>
                            </Link>
                            <Link href={"/cart"}>
                                <p>View Cart</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
      )
});