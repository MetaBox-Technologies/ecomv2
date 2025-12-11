"use client";
import "./css/checkoutForm.css";
import dynamic from "next/dynamic";
import { forwardRef, useContext } from "react";
import { RootContext } from "@/app/_providers/RootContext";

export default CheckoutForm = forwardRef((props, ref) => {

    const products = useContext(RootContext).cartContent;
    const CountrySelector = dynamic(()=>import("../global/countrySelector"), {ssr: false});

    return (
        <>
        <form name="order_checkout-info"  ref={ref}>
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
                    <button type="submit" className=" px-10 py-3 rounded-[8px] bg-[var(--neutral-7)] text-white" style={{fontFamily:"var(--font-inter)"}}>Place Order</button>
                </form>
                {/*<div className="aside-cart flex flex-col gap-6">
                    <button type="submit" form="order_checkout-info" className="lg:hidden px-10 py-3 rounded-[8px] bg-[var(--neutral-7)] text-white" style={{fontFamily:"var(--font-inter)"}}>Place Order</button>
                </div>*/}
        </>
    );
})