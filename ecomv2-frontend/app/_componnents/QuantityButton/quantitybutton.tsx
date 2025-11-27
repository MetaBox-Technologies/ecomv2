import "./css/quantitybutton.css";

interface QuantityButtonProps {
    quantity: number,
    width?: number,
    height?: number,
}

export default function QuantityButton({quantity, width, height}:Readonly<QuantityButtonProps>) {
    
    return (<div className={`item-button__quantity w-[${width? width : 80}px] h-[${height? width : 32}px]`}>
                <button className="material-symbols-outlined">remove</button>
                <p>{quantity}</p>
                <button className="material-symbols-outlined">add</button>
            </div>)
}