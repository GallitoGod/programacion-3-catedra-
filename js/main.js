document.addEventListener("DOMContentLoaded", function() {
    const btnNav = document.getElementById('nav-switch')
    const nav = document.getElementById('nav-section')

    const date = document.getElementById('fecha')
    date.addEventListener('change', (e) => {
        const obj = new Date()
        const inputDate = new Date(e.target.value)
        if (obj > inputDate) {
            return "Fecha de Vuelo debe ser Mayor a la Fecha Actual"
        } else return true
    })

    function toggleMenu() {
        nav.hidden = !(nav.hidden)
    }
    
    btnNav.addEventListener('click', toggleMenu)

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !btnNav.contains(e.target) && nav.hidden == false) {
            toggleMenu()
        }
    })
})