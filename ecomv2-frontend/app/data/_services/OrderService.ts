import { fetchAPI } from "@/app/utils/fetch-api";
import { success } from "zod";

const BASE_URL  = "http://159.65.15.249:1337";

enum deliveryMethod {
    "free",
    "express",
    "pick-up"
}
export interface Item {
    id: any,
    color: string,
    quantity: number,
}
interface OrderFields{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    nid: string,
    street: string;
    city: string;
    country: string;
    delivery: deliveryMethod;
    state? : string;
    postCode?: string;
    items: Item[]
}
export async function OrderItemsServices(ordeId:any, items:Item[]) {
    const path = "/api/order-items";
    const url = new URL(path, BASE_URL);
    const itemsToSend = items.map((item)=>{
        return {
            quantity: Number(item.quantity),
            product: { connect: { documentId: item.id} },
            colour: item.color,
            order: { connect: { documentId: ordeId }}
        }
    });

    

    try  {
        const data:any[] = []
        for(const itemToSend of itemsToSend) {
            const response = await fetch(url.href, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                data : itemToSend
            })
            })
            const mdata = await response.json();
            data.push(mdata);
        }
        return {
            success: true,
            data: data,
        }

    } catch (error) {
        
        return {
            success: false,
            message: error.message,
        } 
    }
}

export async function OrderServices({firstName, lastName, email, nid, phone, street, city, country, delivery, state, postCode, items}:Readonly<OrderFields>) {
    const path  = "/api/orders";
    const url = new URL(path, BASE_URL);


    try {
        const order = await fetch(url.href, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    nid: nid,
                    phone: phone,
                    street: street,
                    city: city,
                    country: country,
                    delivery: delivery,
                    state: (state !== undefined || state !== null) ? state : null,
                    postCode: (postCode !== undefined || postCode !== null) ? postCode : null
                }
            })
        })

        const fResponse = await order.json();
        const orderId = fResponse.data.documentId;
        console.log(orderId);

        const orderItems = await OrderItemsServices(orderId, items);

        if(!orderItems.success) {
            return {
                success: false,
                message: orderItems.message
            }
        }

        return {
            success: true,
            data: orderItems.data
        }
    }catch(error) {
        return {
            success: false,
            message: error.message
        }
    }

}


