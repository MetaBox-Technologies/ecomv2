import "./css/cell.css"
import React, { useContext } from "react"
import QuantityButton from "../QuantityButton/quantitybutton"
import { popProductFromCart } from "./cartContentLoader"
import { getStrapiMedia } from "../strapiImage"
import { Updater } from "./cartContent"
import Image from "next/image"

export interface ProductCellProps {
    id:number, 
    image:{
        url:string,
        alt:string
    }, 
    prodName: string, 
    color: string, 
    prodPrice: number, 
    quantity:number
}

export const  Cell =  React.memo(({id, image, prodName, color, prodPrice, quantity}:Readonly<ProductCellProps>) => {

    const { cartStateUpdater } = useContext( Updater );

    const removeCell = () => {
        const newCartState = popProductFromCart(id, color);
        if(cartStateUpdater)
            cartStateUpdater(newCartState)
    }

    return (
        <div className="item-cell">
            <div className="w-[80px] h-[96px] rounded-md border-1 border-[var(--neutral-4)]" style={{backgroundImage:'url("http://localhost:3000'+image.url+'")', backgroundSize:"contain", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}/>
            <div className="item-cell__info">
                <div className="row-1">
                    <p className="item-name">{prodName}</p>
                    <p className="item-price">${prodPrice}</p>
                </div>
                <div className="row-2">
                    <p className="item-color">Color: {color}</p>
                    <button className="hover:cursor-pointer" onClick={removeCell}>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="row-3">
                    <QuantityButton quantity={quantity} productInfo={{id: id, color: color}} isOnCart/>
                </div>
            </div>
        </div>
    )
})