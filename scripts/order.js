import { placeOrder } from "./transientState.js";

const handlePlaceOrderCLick = (click) => {
    if(click.target.id === "placeOrder"){
        placeOrder()
    }
}

export const PlaceOrder = () => {
    document.addEventListener("click", handlePlaceOrderCLick)
    return `<button id="placeOrder">Create Custom Order</button>`
}

export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders")
    const orders = await fetchResponse.json()
    let ordersHTML =""
    let orderCounter = 0
    let divStringArray = orders.map(
        (order) => {
            
            orderCounter ++
            return `<div>
            Order #${orderCounter}
            </div>`
        }
    )
    ordersHTML += divStringArray.join("")
    return ordersHTML
}

