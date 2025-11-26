"use client";

import { ReactNode , createRef, useState} from "react";
import { RootContext } from "./RootContext";
import { Cart } from "../_componnents/Cart/cart";


export function RootProviders({ children }:{children: ReactNode}) {

    const [isOpen, setIsOpen] = useState(false);

    
    const isOpenHandler = (isOpen:Boolean) => {
        setIsOpen(isOpen);
        console.log(isOpen);
    }

    return(
        <RootContext.Provider value={{ isCartOpen : isOpenHandler}}>
            <button className="border-1 border-[white]" onClick={()=>{isOpenHandler(true)}}>Open Cart</button>
            <Cart isOpen={isOpen} />
            {children}
        </RootContext.Provider>
    );
}