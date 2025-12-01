"use client"

import "./page.css";
import { StepperDesktop } from "../_componnents/Cart/stepperDesktop";
import Link from "next/link";
import Row from "../_componnents/Cart/row";
import Cell from "../_componnents/Cart/cell";
import dynamic from "next/dynamic";

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

    const ResponsiveManager = dynamic(() => import("../_componnents/global/responsiveManager"), {ssr: false});

    
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
                <div className="product-table">
                    <div className="product-table__header">
                        <div className="col__main">Product</div>
                        <div className="col__sg">
                            <div className="col__qt">Quantity</div>
                            <div className="col__price">Price</div>
                            <div className="col__subtotal">Subtotal</div>
                        </div>
                    </div>
                    <div className="product-table__body flex flex-col items-center sm:block">
                        <ResponsiveManager Mobile={cell} MobileProps={prodDetails} Desktop={row} DesktopProps={prodDetails}/>
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


