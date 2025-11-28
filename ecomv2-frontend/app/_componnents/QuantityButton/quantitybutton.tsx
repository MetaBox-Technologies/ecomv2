import "./css/quantitybutton.css";

interface QuantityButtonProps {
    quantity: number,
    width?: number,
    height?: number,
}

export default function QuantityButton({quantity, width=80, height=34}:Readonly<QuantityButtonProps>) {
    
    return (<div className="item-button__quantity" style={{width: `${width}px`, height: `${height}px`}}>
                <button className="material-symbols-outlined">remove</button>
                <p>{quantity}</p>
                <button className="material-symbols-outlined">add</button>
            </div>)
}