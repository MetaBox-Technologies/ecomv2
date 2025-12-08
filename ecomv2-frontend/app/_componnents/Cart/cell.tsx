import "./css/cell.css"
import React, { useContext } from "react"
import QuantityButton from "../QuantityButton/quantitybutton"
import { popProductFromCart } from "./cartContentLoader"
import { getStrapiMedia } from "../strapiImage"
import { Updater } from "./cartContent"

interface ProductCellProps {
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
    const url = getStrapiMedia(image.url);

    const { cartStateUpdater } = useContext( Updater );

    const removeCell = () => {
        const newCartState = popProductFromCart(id, color);
        if(cartStateUpdater)
            cartStateUpdater(newCartState)
    }

    return (
        <div className="item-cell">
            <img src={url} width={80} height={96} alt={image.alt||""}/>
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