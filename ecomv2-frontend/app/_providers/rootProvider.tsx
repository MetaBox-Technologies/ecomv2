"use client";

import { ReactNode , createRef, useState} from "react";
import { RootContext } from "./RootContext";
import { Cart } from "../_componnents/Cart/cart";
import { Header } from "../_componnents/header/header";
import { Footer } from "../_componnents/footer/footer";


export function RootProviders({ children }:{children: ReactNode}) {

    const [isOpen, setIsOpen] = useState(false);

    
    const isOpenHandler = (isOpen:Boolean) => {
        setIsOpen(isOpen);
        console.log(isOpen);
    }

    return(
        <RootContext.Provider value={{ isCartOpen : isOpenHandler}}>
            {/*<button className="border-1 border-[white]" onClick={()=>{isOpenHandler(true)}}>Open Cart</button>*/}
            <Header clickHandler={isOpenHandler}/>
            <Cart isOpen={isOpen} />
            {children}
            <Footer/>
        </RootContext.Provider>
    );
}