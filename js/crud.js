import { Modelo } from "./Modelo.js"
import { View } from "./View.js"


document.addEventListener('DOMContentLoaded', () => {
    const view = new View
    const modelo = new Modelo
    view.setModelo(modelo)
    modelo.setView(view)
    view.render()
})