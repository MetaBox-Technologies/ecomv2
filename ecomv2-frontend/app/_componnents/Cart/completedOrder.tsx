import { Product } from "./cartContentLoader";
import  Link from "next/link";
import "./css/completedOrder.css";
import { useContext, useEffect } from "react";
import { RootContext } from "@/app/_providers/RootContext";
import { clearCart } from "./cartContentLoader";


interface MiniProdCardsProps{
    url: string;
    qt: number;
}

const MiniProdCard: React.FC = ({url, qt}:MiniProdCardsProps)=>{
    
    
    return (
        <div className="img__container">
            <div  className="w-[88px] h-[104px] rounded-[12px]" style={{backgroundImage: `url("http://159.65.15.249:1337${url}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat:'no-repeat'}} alt=""/>
            <span className="qt">{qt}</span>
        </div>
    )
}



interface CompletedOrderProps {
    products: [Product];
    total: number;
}
export function CompletedOrder({products, total}:Readonly<CompletedOrderProps>){
    const {cartUpdater} = useContext(RootContext);

    useEffect(()=>{
    return ()=> {
        cartUpdater(clearCart());
        }
    },[])
    
    return (
        <div className="complete">
                    <div className="complete__header">
                        <p>Thank you! 🎉</p>
                        <h2>Your order has been received</h2>
                    </div>
                    <div className={"complete__product-img " + (products.length > 4 ? "justify-start ": "justify-center")}>
                       {products.map((product, index)=> {
                        return <MiniProdCard key={index} url={product.image.url} qt={product.quantity}/>
                       })}        
                    </div>
                    <div className="complete__info">
                        <div className="info__row">
                            <p className="label">Date:</p>
                            <p className="info">{new Date().toLocaleString('en-US', {year: "numeric", month: "long", day:"numeric"})}</p>
                        </div>
                        <div className="info__row">
                            <p className="label">Total:</p>
                            <p className="info">${total}</p>
                        </div>
                    </div>
                    <Link href={"/shop"}>Go back to shop</Link>
                </div>
    )

}