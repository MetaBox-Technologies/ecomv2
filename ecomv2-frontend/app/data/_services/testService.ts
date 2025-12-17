const BASE_URL  = "http://159.65.15.249:1337";

enum deliveryMethod {
    "free",
    "express",
    "pick-up"
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
}

export async function testOrderServices({firstName, lastName, email, nid, phone, street, city, country, delivery, state, postCode}:Readonly<OrderFields>) {
    const path  = "/api/orders";
    const url = new URL(path, BASE_URL);


    try {
        const response = await fetch(url.href, {
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
        const data = response.json()
        return {
            success: true,
            data: data
        }
    }catch(error) {
        return {
            success: false,
            message: error.message
        }
    }

}

