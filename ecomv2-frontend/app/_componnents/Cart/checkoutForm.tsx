"use client";

import "./css/checkoutForm.css";
import dynamic from "next/dynamic";
import testAction from "./testAction";
import React, { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";



export function CheckoutForm() {

    const [formState, action] = useActionState(testAction, {valid:{}, errors:{}});

    const SubmitButton = React.memo(()=>{
        const { pending } = useFormStatus()
        return (
            <button type="submit" className=" px-10 py-3 rounded-[8px] bg-[var(--neutral-7)] text-white" style={{fontFamily:"var(--font-inter)"}} disabled={pending}> {!pending? "Place Order" : <div className="loader"/>} </button>
        )
    })

    const placeHolder = React.memo(()=>{
            <input type="text" disabled/>
    })




    useEffect(()=>{
        console.log(formState)
    },[formState])

    const CountrySelector = dynamic(()=>import("../global/countrySelector"), {ssr: false, loading: placeHolder});

    return (
        <>
        <form name="order_checkout-info" action={action}>
                <fieldset className="contact-info">
                    <h2>Contact information</h2>
                        <div className="__double">
                            <div className="input-group">
                                <label htmlFor="fname">FIRST NAME</label>
                                <input type="text" name="fname" id="fname" placeholder={formState.errors?.fname ? formState.errors?.fname : "First name"} defaultValue={formState.valid?.fname ? formState.valid?.fname : ""} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lname">LAST NAME</label>
                                <input type="text" name="lname" id="lname" placeholder={formState.errors?.lname ? formState.errors?.lname : "Last name"} defaultValue={formState.valid?.lname ? formState.valid?.lname : ""}/>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">PHONE NUMBER</label>
                            <input type="text" name="phone" id="phone" placeholder={formState.errors?.phone ? formState.errors?.phone : "Phone number"} defaultValue={formState.valid?.phone ? formState.valid?.phone : ""}/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input type="email" name="email" id="email" placeholder={formState.errors?.email ? formState.errors?.email : "Email address"} defaultValue={formState.valid?.email ? formState.valid?.email : ""}/>
                        </div> 
                    </fieldset>
                    <fieldset className="shipping-address">
                        <h2>Shipping Address</h2>
                        <div className="input-group">
                            <label htmlFor="street">STREET ADDRESS*</label>
                            <input type="text" name="address" id="street" placeholder={formState.errors?.address ? formState.errors?.address : "Street address"} defaultValue={formState.valid?.address ? formState.valid?.address : ""}/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="country">COUNTRY*</label>
                            <CountrySelector inputName={"country"}/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="city">TOWN/CITY*</label>
                            <input type="city" name="city" id="city" placeholder={formState.errors?.city ? formState.errors?.city : "Town/City"} defaultValue={formState.valid?.city ? formState.valid?.city : ""}/>
                        </div>
                        <div className="__double">
                            <div className="input-group">
                                <label htmlFor="state">STATE</label>
                                <input type="text" name="state" id="state" placeholder={formState.errors?.state ? formState.errors?.state : "State"} defaultValue={formState.valid?.state ? formState.valid?.state : ""}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="zip">ZIP CODE</label>
                                <input type="text" name="zip" id="zip" placeholder={formState.errors?.zip ? formState.errors?.zip : "Zip Code"} defaultValue={formState.valid?.zip ? formState.valid?.zip : ""}/>
                            </div>
                        </div>
                        <SubmitButton/>
                    </fieldset>
                    
                </form>
                {/*<div className="aside-cart flex flex-col gap-6">
                    <button type="submit" form="order_checkout-info" className="lg:hidden px-10 py-3 rounded-[8px] bg-[var(--neutral-7)] text-white" style={{fontFamily:"var(--font-inter)"}}>Place Order</button>
                </div>*/}
        </>
    );
}