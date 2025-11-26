import "./css/cell.css"

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

export default function Cell({image, itemName, itemColor, itemPrice, quantity}:Readonly<CellsProps>) {
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
                    <div className="item-button__quantity w-[80px] h-[32px]">
                        <button className="material-symbols-outlined">remove</button>
                        <p>{quantity}</p>
                        <button className="material-symbols-outlined">add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}