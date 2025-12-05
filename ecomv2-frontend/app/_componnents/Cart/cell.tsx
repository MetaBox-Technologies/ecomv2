import "./css/cell.css"
import React from "react"
import QuantityButton from "../QuantityButton/quantitybutton"

interface CellsProps{
    image: {
        src: string,
        alt?: string
    },
    itemName: string,
    itemColor: string,
    itemPrice: number,
    quantity: number,
}

export const  Cell =  React.memo(({image, itemName, itemColor, itemPrice, quantity}:Readonly<CellsProps>) => {
    
    return (
        <div className="item-cell">
            <img src={image.src} width={80} height={96} alt={image.alt||""}/>
            <div className="item-cell__info">
                <div className="row-1">
                    <p className="item-name">{itemName}</p>
                    <p className="item-price">${itemPrice}</p>
                </div>
                <div className="row-2">
                    <p className="item-color">Color: {itemColor}</p>
                    <button>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="row-3">
                    <QuantityButton quantity={quantity}/>
                </div>
            </div>
        </div>
    )
})