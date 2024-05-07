import { setSizeChoice } from "./transientState.js"

const handleSizeChoice = (event) =>{
    if (event.target.name === "size"){
        setSizeChoice(parseInt(event.target.value))
    }
}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()
    document.addEventListener("change", handleSizeChoice)

    let sizeOptionsHTML = `<h3>Choose your size:</h3>`
    const divStringArray = sizes.map(
        (size) => {
            return `<div>
            <input type="radio" name="size" value="${size.id}"/>${size.carets}
            </div>`
        }
    )
    sizeOptionsHTML += divStringArray.join(" ")
    return sizeOptionsHTML
}