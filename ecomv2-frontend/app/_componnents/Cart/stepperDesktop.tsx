import { forwardRef, useEffect, createRef, useImperativeHandle } from "react"
import "./css/stepperDesktop.css"

export const Stepper = forwardRef((props, forwardRef) => {


    const internalStep1Ref = createRef();
    const internalStep2Ref = createRef();
    const internalStep3Ref = createRef();

    
    useImperativeHandle(forwardRef, ()=>({
        step1 : internalStep1Ref.current,
        step2: internalStep2Ref.current,
        step3: internalStep3Ref.current
    }))





    const { current } = props;
    useEffect(()=>{
        console.log("current step: ", current)
    })

    return (
        <div className={"process-steps relative transition-[all] duration-300 ease-in-out " + (current === "checkout" ? "-translate-x-[288px] md:translate-none" : "")}>
            <div ref={internalStep1Ref} className={"process first hover:cursor-not-allowed " + (current === "checkout" ? "complete hover:cursor-pointer": "")}>
                <div className={"process__no "+(current === "checkout" ? "material-symbols-outlined": "")}>{current === "checkout" ? "check": "1"}</div>
                <p className="process__name">Shopping Cart</p>
            </div>
            <div ref={internalStep2Ref} className={"process "+ (current === "cart" ? "incomplete hover:cursor-pointer" : "") + (current === "checkout" ? "current hover:cursor-not-allowed" : "")}>
                <div className="process__no">2</div>
                <p className="process__name">Checkout details</p>
            </div>
            <div ref={internalStep3Ref} className="process incomplete hover:cursor-not-allowed">
                <div className="process__no">3</div>
                <p className="process__name">Order complete</p>
            </div>
        </div>
    )
})