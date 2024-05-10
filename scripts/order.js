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
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=type")
    const orders = await fetchResponse.json()
    let ordersHTML =""
    let orderCounter = 0
    
    let divStringArray = orders.map(
        (order) => {
            const orderPrice = (order.metal.price + order.style.price + order.size.price) * order.type.price
            orderCounter ++
            return `<div>
            Order #${orderCounter} cost $${orderPrice}
            </div>`
        }
    )
    ordersHTML += divStringArray.join("")
    return ordersHTML
}

