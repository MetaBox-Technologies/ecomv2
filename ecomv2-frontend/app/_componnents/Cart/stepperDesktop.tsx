import "./css/stepperDesktop.css"

export function StepperDesktop() {
    return (
        <div className="process-steps">
            <div className="process">
                <div className="process__no">1</div>
                <p className="process__name">Shopping Cart</p>
            </div>
            <div className="process incomplete">
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