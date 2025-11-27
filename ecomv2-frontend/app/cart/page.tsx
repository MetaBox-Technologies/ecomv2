"use client"

import "./page.css";
import QuantityButton from "../_componnents/QuantityButton/quantitybutton";
import { useState, useEffect } from "react";
import Link from "next/link";


function handleWidth(){
    if(window.innerWidth < 768) {
        console.log('mobilde width');
    }
}


export default function CartPage() {
    useEffect(()=>{
        window.addEventListener("resize", handleWidth);
        return ()=>{
        window.removeEventListener("resize", handleWidth)
    }
    },[]);
    
    return (
        <div className="flex flex-col md:items-center xl:px-[160px] md:py-[80px]">
            <div id="page-header">
                <Link className="breadcrumbs" href={"/"}>
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                    <p>Back</p>
                </Link>
                <header>
                    <h2>Cart</h2>
                    <div className="process-steps">
                        <div className="process">
                            <div className="process__no">1</div>
                            <p className="process__name">Shopping Cart</p>
                        </div>
                        <div className="process incomplete">
                            <div className="process__no">2</div>
                            <p className="process__name">Checkout details</p>
                        </div>
                        <div className="process incomplete">
                            <div className="process__no">3</div>
                            <p className="process__name">Order complete</p>
                        </div>
                    </div>
                </header>
            </div>
            <main>
                <div className="product-table">
                    <div className="product-table__header">
                        <div className="col__main">Product</div>
                        <div className="col__sg">
                            <div className="col__qt">Quantity</div>
                            <div className="col__price">Price</div>
                            <div className="col__subtotal">Subtotal</div>
                        </div>
                    </div>
                    <div className="product-table__body">
                        <div className="product-table__row">
                            <div className="col__main">
                                <img src={'/images/products/TABLE.JPG'} width={80} height={96}/>
                                <div className="product-item__overview">
                                    <p className="name"> Tray table</p>
                                    <p className="color">Color: Black</p>
                                    <button className="btn remove-btn"><span className="material-symbols-outlined">close</span> Remove</button>
                                </div>
                            </div>
                            <div className="col__sg">
                                <div className="col__qt">
                                    <QuantityButton quantity={2}/>
                                </div>
                                <div className="col__price">$19.00</div>
                                <div className="col__subtotal">$38.00</div>
                            </div>
                        </div>
                        <div className="product-table__row">
                            <div className="col__main">
                                <img src={'/images/products/TABLE.JPG'} width={80} height={96}/>
                                <div className="product-item__overview">
                                    <p className="name"> Tray table</p>
                                    <p className="color">Color: Black</p>
                                    <button className="btn remove-btn"><span className="material-symbols-outlined">close</span> Remove</button>
                                </div>
                            </div>
                            <div className="col__sg">
                                <div className="col__qt">
                                    <QuantityButton quantity={2}/>
                                </div>
                                <div className="col__price">$19.00</div>
                                <div className="col__subtotal">$38.00</div>
                            </div>
                        </div>
                        <div className="product-table__row">
                            <div className="col__main">
                                <img src={'/images/products/TABLE.JPG'} width={80} height={96}/>
                                <div className="product-item__overview">
                                    <p className="name"> Tray table</p>
                                    <p className="color">Color: Black</p>
                                    <button className="btn remove-btn"><span className="material-symbols-outlined">close</span> Remove</button>
                                </div>
                            </div>
                            <div className="col__sg">
                                <div className="col__qt">
                                    <QuantityButton quantity={2}/>
                                </div>
                                <div className="col__price">$19.00</div>
                                <div className="col__subtotal">$38.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="product-cart__summary">
                    <h2>Summary</h2>
                    <div className="summary-delivery">
                        <div className="summary-delivery__choice">
                            <div className="inpt-radio__group">
                                <input name="delivery" id="free-shipping" type="radio" value={"free"}/>
                                <label htmlFor="free-shipping"> Free Shipping</label>
                            </div>
                            <p className="added__price">$0.00</p>
                        </div>
                        <div className="summary-delivery__choice">
                            <div className="inpt-radio__group">
                                <input name="delivery" id="express" type="radio" value={"express"} />
                                <label htmlFor="express">Express Shipping</label>
                            </div>
                            <p className="added__price">+$15.00</p>
                        </div>
                        <div className="summary-delivery__choice">
                            <div className="inpt-radio__group">
                                <input name="delivery" id="pick-up" type="radio" value={"pick-up"}/>
                                <label htmlFor="pick-up">Pick Up</label>
                            </div>
                            <p className="added__price">%21.00</p>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="fields__subtotal">
                            <p>Subtotal</p>
                            <p>${(19.00 * 3).toFixed(2)}</p>
                        </div>
                        <div className="fields__total">
                            <p className="font-semibold">Total</p>
                            <p>${(19.00 * 3).toFixed(2)}</p>
                        </div>
                    </div>
                    <button type="submit">Checkout</button>
                </form>
            </main>
        </div>
    )
}


