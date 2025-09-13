import { pagina1 } from './pages/pagina1.js'
import { pagina2 } from './pages/pagina2.js'
import { pagina3 } from './pages/pagina3.js'
import { mountHeader } from './header.js'

document.addEventListener('DOMContentLoaded', () => {
    mountHeader()
    console.info("Me resulta raro y molesto de aplicar el hecho de poner en el formulario la cantidad de pasajes a comprar, al fin y al cabo lo mismo se van a tener que llenar a mano todos independientemente de esa funcion")
    const page = document.body.dataset.page
    if (page === 'pagina1') pagina1()
    if (page === 'pagina2') pagina2()
    if (page === 'pagina3') pagina3()
}) 
