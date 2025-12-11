"use client"
import { createContext } from "react";
import type { Product } from "../_componnents/Cart/cartContentLoader";

export const RootContext = createContext<any>({
    isCartOpen: ()=>{},
    CartContent: [],
    cartUpdater: ()=>{},
})