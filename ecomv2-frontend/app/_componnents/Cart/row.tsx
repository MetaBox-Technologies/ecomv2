import "./css/row.css";
import QuantityButton from "../QuantityButton/quantitybutton";


interface RowProps {
    image:{
        src: string,
        alt?: string,
    }
    itemName: string,
    itemColor: string,
    itemPrice: number,
    quantity: number
}

export default function Row({image, itemName, itemColor, itemPrice, quantity}:Readonly<RowProps>) {
    return (
        <div className="product-table__row">
            <div className="col__main">
                <img src={image.src} width={80} height={96} alt={image.alt || ""}/>
                <div className="product-item__overview">
                    <p className="name">{itemName}</p>
                    <p className="color">Color: {itemColor}</p>
                    <button className="btn remove-btn"><span className="material-symbols-outlined">close</span> Remove</button>
                </div>
            </div>
            <div className="col__sg">
                <div className="col__qt">
                    <QuantityButton quantity={quantity}/>
                </div>
                <div className="col__price">${itemPrice}</div>
                <div className="col__subtotal">${(itemPrice * quantity).toFixed(2)}</div>
            </div>
        </div>
    )
}