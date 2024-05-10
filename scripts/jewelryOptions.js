import { setJewelryChoice } from "./transientState.js";

const handleJewelryChoice = (event) => {
    if(event.target.name === "jewelry"){
        setJewelryChoice(parseInt(event.target.value))
    }
}

export const jewelryOptions = async () => {
    const response = await fetch("http://localhost:8088/types")
    const jewelries = await response.json()
    document.addEventListener("change", handleJewelryChoice)

    let jewelryOptionsHTML = `<h3>Choose your jewelry type:</h3>`
    let divStringArray = jewelries.map(
        (jewelry) => {
            return `<div>
            <input type="radio" name="jewelry" value="${jewelry.id}"/>${jewelry.type}
            </div>`
        }
    )
    jewelryOptionsHTML += divStringArray.join("")
    return jewelryOptionsHTML
}