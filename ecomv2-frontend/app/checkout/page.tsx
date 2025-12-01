"use client"

import "./page.css";
import { StepperDesktop } from "../_componnents/Cart/stepperDesktop";
import Link from "next/link";
import Row from "../_componnents/Cart/row";
import Cell from "../_componnents/Cart/cell";
import dynamic from "next/dynamic";
import CountrySelector from "../_componnents/global/countrySelector";
import { CartContent } from "../_componnents/Cart/cartContent";

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

    const ResponsiveManager = dynamic(()=>import("../_componnents/global/responsiveManager"), { ssr: false});
    const CountrySelector = dynamic(()=>import("../_componnents/global/countrySelector"), {ssr: false});

    

    
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
                <form name="order_checkout-info" id="">
                <fieldset className="contact-info">
                    <h2>Contact information</h2>
                        <div className="__double">
                            <div className="input-group">
                                <label htmlFor="fname">FIRST NAME</label>
                                <input type="text" name="fname" id="fname" placeholder="First name"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="lname">LAST NAME</label>
                                <input type="text" name="lname" id="lname" placeholder="Last name"/>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">PHONE NUMBER</label>
                            <input type="text" name="phone" id="phone" placeholder="Phone number"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input type="email" name="email" id="email" placeholder="Email adress"/>
                        </div> 
                    </fieldset>
                    <fieldset className="shipping-address">
                        <h2>Shipping Address</h2>
                        <div className="input-group">
                            <label htmlFor="street">STREET ADDRESS*</label>
                            <input type="text" name="street" id="street" placeholder="Street Address"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="country">COUNTRY*</label>
                            <CountrySelector/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="city">TOWN/CITY*</label>
                            <input type="city" name="city" id="city" placeholder="Town / City"/>
                        </div>
                        <div className="__double">
                            <div className="input-group">
                                <label htmlFor="state">STATE</label>
                                <input type="text" name="state" id="state" placeholder="State"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="zip">ZIP CODE</label>
                                <input type="text" name="zip" id="zip" placeholder="Zip Code"/>
                            </div>
                        </div>
                    </fieldset>
                    <button type="submit" className="hidden lg:block px-10 py-3 rounded-[8px] bg-[var(--neutral-7)] text-white" style={{fontFamily:"var(--font-inter)"}}>Place Order</button>
                </form>
                <div className="aside-cart flex flex-col gap-6">
                    <CartContent />
                    <button type="submit" form="order_checkout-info" className="lg:hidden px-10 py-3 rounded-[8px] bg-[var(--neutral-7)] text-white" style={{fontFamily:"var(--font-inter)"}}>Place Order</button>
                </div>
            </main>
        </div>
    )
}


