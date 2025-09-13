//Esto solo se ejecutaria una vez y no quedaria expectante a nuevos cambios. Tengo que buscar la forma de que espera cambios
export function init() {
    const date = document.getElementById('fecha')
    date.addEventListener('change', (e) => {
        const obj = new Date()
        const inputDate = new Date(e.target.value)
        if (obj > inputDate) {
            return "Fecha de Vuelo debe ser Mayor a la Fecha Actual"
        } else return true
    })

    const origen = document.getElementById('origen')
    const destino = document.getElementById('destino')

    lugares = [
        {
            id: 0,
            punto: 'Córdoba'
        },
        {
            id: 1,
            punto: 'Tucumán'
        },
        {
            id: 2,
            punto: 'Mendoza'
        }
    ]

    origen.addEventListener('change', (e) => {
        console.log(e.target.value)
    })

    function renderOptions(lugar) {
        const option = document.createElement('option')
        option.value = lugar.punto
        option.textContent = lugar.punto
    }
}