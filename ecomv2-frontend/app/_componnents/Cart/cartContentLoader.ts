import { ReferrerEnum } from "next/dist/lib/metadata/types/metadata-types";

export interface Product{
    id: number,
    prodName: string,
    prodPrice: number,
    quantity: number,
    color: string,
    image: {
        url: string,
        alt?: string 
    }
}

export function cartloader(): [Product] | []{
    const cart = localStorage.getItem("cart");
    if (cart)
        return JSON.parse(cart);
    return [];
}

export function pushProductToCart({id, prodName, prodPrice, quantity, image, color}:Readonly<Product>) {
    const productToPush:Product = {
        id: id,
        prodName: prodName, 
        prodPrice: prodPrice,
        quantity: quantity,
        color: color,
        image: image,
    }
    
    const cart = cartloader();
    cart.push(productToPush);

    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(localStorage.getItem("cart"));
}

enum Operation {
    increase = 1,
    decrease = (-1)
}

export function updateCart(id: number,op:Operation = Operation.increase, color?: string) {
    const cart = cartloader();

    let newCartState = cart.map((product)=>{
        if(color) {
            if(product.id === id && product.color === color) 
                product.quantity += op
             
        }else {
            if(product.id === id)
                product.quantity += op
        }
        return product;
    });


    localStorage.setItem("cart", JSON.stringify(newCartState));
    console.log(localStorage.getItem("cart"));
    return newCartState;
}

export function popProductFromCart(id: number, color?: string) {
    const cart = cartloader();

    let newCartState = cart.filter((product) => {
        if(color){
            let isTheSameId = product.id === id;
            let isTheSameColor = product.color === color;
            if((isTheSameId && !isTheSameColor) || !isTheSameId) {
                return product;
            }
        } else {
            let isTheSameId = product.id === id;
            if(!isTheSameId) {
                return product;
            }
        }
    })

    if(newCartState.length === 0) {
        localStorage.removeItem("cart");
        return[];
    }

    localStorage.setItem("cart", JSON.stringify(newCartState));
    console.log(localStorage.getItem("cart"));
    return newCartState;
}

