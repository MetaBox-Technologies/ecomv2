"use client";

import { ReactNode , createRef, useEffect, useState} from "react";
import { RootContext } from "./RootContext";
import { Cart } from "../_componnents/Cart/cart";
import { Header } from "../_componnents/header/header";
import { Footer } from "../_componnents/footer/footer";
import { cartloader } from "../_componnents/Cart/cartContentLoader";
import { CartContent } from "../_componnents/Cart/cartContent";


export function RootProviders({ children }:{children: ReactNode}) {

    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);
    


    
    const isOpenHandler = (isOpen:Boolean) => {
        setIsOpen(isOpen);
    }

    useEffect(()=>{
        setProducts(cartloader())
    }, [])


    return(
        <RootContext.Provider value={{ isCartOpen : isOpenHandler , cartContent: products, cartUpdater: setProducts}}>
            {/*<button className="border-1 border-[white]" onClick={()=>{isOpenHandler(true)}}>Open Cart</button>*/}
            <Header clickHandler={isOpenHandler}/>
            <Cart isOpen={isOpen}/>
            {children}
            <Footer/>
        </RootContext.Provider>
    );
}