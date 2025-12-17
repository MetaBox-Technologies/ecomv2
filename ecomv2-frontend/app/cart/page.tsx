"use client"

import "./page.css";
import { StepperDesktop } from "../_componnents/Cart/stepperDesktop";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useState, useRef, useEffect, useMemo, useContext} from "react";
import { CheckoutForm } from "../_componnents/Cart/checkoutForm";
import  CartTable from "../_componnents/Cart/cartTable";
import { createContext } from "react";
import { RootContext } from "../_providers/RootContext";


export const PageNavigationContext = createContext({})

    
export default function CartPage(){
    
    const [delivery, setDelivery] = useState(null);
    const [stage, setStage] =  useState({current: "cart", next: "checkout", stagePrev: null});
    const [firstRender, setFirstRender] = useState(true);
    const mainRef = useRef();
    const RenderCount = useRef(0);
    const {isCartOpen, openCheck} = useContext(RootContext);


    const Loader:React.FunctionComponent = ()=>{
        return(
        <div className="load-wraper">
            <div className="activity"></div>
        </div>)        
    }

    const goToCheckout = async()=>{
        if(mainRef.current) {
            mainRef.current.classList.add("go-next");
            await new Promise((resolve)=>{setTimeout(()=>{
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
                setStage({current: "checkout", next: "finished payemnt", stagePrev:"cart"});
                resolve()
            },500)});
            mainRef.current.classList.remove("go-next")
            
        }
    }

    const goTo = async ()=>{
        if(mainRef.current){
            mainRef.current.classList.add("go-next");
            const wNext = stage.current;
            const wCurr = stage.stagePrev
            const wPrev = stage.current;
            await new Promise((resolve)=>{setTimeout(()=>{
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
                setStage({current: wCurr, next: wNext, stagePrev: wPrev});
                resolve()
            },750)});
            mainRef.current.classList.remove("go-next")
            
            
            
        }
    }

    useEffect(()=>{
       if(openCheck)
            isCartOpen(false)
    },[])

    useEffect(()=>{
        if(stage.stagePrev !== null || stage.stagePrev !== "checkout")
            history.pushState(stage, "",`/${stage.current}`)

        window.addEventListener("popstate", async ()=>{
            await goTo();
        })

        return ()=>{window.removeEventListener("popstate", async()=>{
            await goTo();
        })}
    }, [stage])
    
    

    const DynamicCartTable = dynamic(()=> import("../_componnents/Cart/cartTable"), {ssr: false, loading: Loader});

    
    return (
        <div className="flex flex-col pb-[80px] lg:items-center xl:px-[160px] pt-[105px] w-100vw">
            <div id="page-header">
                <Link className="breadcrumbs" href={"/"}>
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                    <p>Back</p>
                </Link>
                <header className="cart-header">
                    <h2>Cart</h2>
                    <StepperDesktop current={stage.current}/>
                </header>
            </div>
            <main ref={mainRef} className={stage.current === "checkout" ? "items-center" : ""}>
                <PageNavigationContext.Provider value={{goNextHandler:goToCheckout, firstRenderHandler: setFirstRender}}>
                    {stage.current === "cart" &&  <DynamicCartTable/> }
                    {stage.current === "checkout" && <CheckoutForm/>}
                </PageNavigationContext.Provider>    
            </main>
        </div>
    )
}


