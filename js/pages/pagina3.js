import { Modelo } from "../Modelo.js"
import { View } from "../View.js"


export function init() {
    const view = new View
    const modelo = new Modelo
    view.setModelo(modelo)
    modelo.setView(view)
    view.render()
    view.render()
    view.render()   //tres veces XD
}