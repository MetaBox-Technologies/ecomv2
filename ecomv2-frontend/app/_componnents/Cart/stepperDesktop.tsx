import { useEffect } from "react"
import "./css/stepperDesktop.css"

export function StepperDesktop({current}) {

    
    return (
        <div className={"process-steps relative transition-[all] duration-300 ease-in-out " + (current === "checkout" ? "-translate-x-[288px] md:translate-none" : "")}>
            <div className={"process first " + (current === "checkout" ? "complete": "")}>
                <div className={"process__no "+(current === "checkout" ? "material-symbols-outlined": "")}>{current === "checkout" ? "check": "1"}</div>
                <p className="process__name">Shopping Cart</p>
            </div>
            <div className={"process "+ (current === "cart" ? "incomplete" : "") + (current === "checkout" ? "current" : "")}>
                <div className="process__no">2</div>
                <p className="process__name">Checkout details</p>
            </div>
            <div className="process incomplete">
                <div className="process__no">3</div>
                <p className="process__name">Order complete</p>
            </div>
        </div>
    )
}