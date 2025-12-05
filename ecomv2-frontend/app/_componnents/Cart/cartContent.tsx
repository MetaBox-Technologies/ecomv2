import "./css/cartContent.css"
import { ForwardedRef, forwardRef } from "react";
import Link from "next/link";
import { Cell }  from "./cell";
import { cartloader } from "./cartContentLoader";
import { useEffect } from "react";
interface CartContentProps{
    cStatic:boolean,
}

export const CartContent = forwardRef(({cStatic = false}:Readonly<CartContentProps>, innerref) => {

    useEffect(()=>{
        console.log("rendered");
    });
    return (
        <div className={`cart-content ${cStatic ? "translate-x-100 w-[343px]": "w-[312px] rounded-[4px] border-1 border-[var(--neutral-4)] h-[fit-content]"}`} ref={innerref} >
            <div className="summary__items">
                <div className="summary__items-headline">
                    <h5 className={`${!cStatic?"text-[20px]":"text-[34px]"}`}>{cStatic ? "Cart":"Order Summary"}</h5>
                    {cStatic && (
                        <button>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    )}
                </div>
                <div className="items-list">
                    <Cell 
                        image={{src:"/images/products/TABLE.jpg"}}
                        itemName="Tray Table"
                        itemColor="black"
                        itemPrice={19.19}
                        quantity={2}
                    />
                    <Cell 
                        image={{src:"/images/products/TABLE.jpg"}}
                        itemName="Tray Table"
                        itemColor="black"
                        itemPrice={19.19}
                        quantity={2}
                    />
                </div>
                
            </div>
            {/*<div className={`summary__counts ${cStatic ? "h-[218px]" : ""}`}>
                <div className="fields">
                    {!cStatic && (
                        <div className="fields__subtotal shipping py-[13px]">
                            <p>Shipping</p>
                            <p className="number">${(19.19*3).toFixed(2)}</p>
                        </div>
                    )}
                    <div className={`fields__subtotal ${cStatic ? "flex-1":"py-[13px]"}`}>
                        <p>Subtotal</p>
                        <p className="number">${(19.19*3).toFixed(2)}</p>
                    </div>
                    <div className={`fields__total ${cStatic ? "flex-1":"py-[13px]"}`}>
                        <p style={ { fontWeight :"400",} }>Total</p>
                        <p>${(19.19*3).toFixed(2)}</p>
                    </div>
                </div>
                {cStatic &&(
                <div className="buttons">
                    <Link href={"/checkout"} className="buttons__checkout">
                        <p>Checkout</p>
                    </Link>
                    <Link href={"/cart"}>
                        <p>View Cart</p>
                    </Link>
                </div>
                )}
            </div>*/}
        </div>
    )
})
