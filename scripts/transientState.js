const transientState = {
    "metalId": 0,
    "styleId": 0,
    "sizeId": 0,
    "typeId": 0
}

export const setMetalChoice = (chosenMetal) => {
    transientState.metalId = chosenMetal
}

export const setStyleChoice = (chosenStyle) => {
    transientState.styleId= chosenStyle
}

export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = chosenSize
}

export const setJewelryChoice = (chosenJewelry) => {
    transientState.typeId= chosenJewelry
}

export const placeOrder = async () => {
    const postOptions ={
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}