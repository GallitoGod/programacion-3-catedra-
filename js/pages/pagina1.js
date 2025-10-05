export function pagina1() {
    const date = document.getElementById('fecha')
    date.addEventListener('change', (e) => {
        const obj = new Date()
        const inputDate = new Date(e.target.value)
        if (obj > inputDate) {
            e.target.setCustomValidity('Fecha de vuelo debe ser mayor a la actual')
            e.target.reportValidity()
        } else e.target.setCustomValidity('')
    })

    const origen = document.getElementById('origen')
    const destino = document.getElementById('destino')

    const lugares = [
        { id: 0, punto: ''},
        { id: 1, punto: 'Córdoba'},
        { id: 2, punto: 'Tucumán'},
        { id: 3, punto: 'Mendoza'}
    ]
    function renderOptions(select, arr, reset = false) {
        if (!select) return
        if (reset) select.innerHTML = ''
        for (const {id, punto} of arr) {
            select.add(new Option(punto, id))
        }
    }

    renderOptions(origen, lugares)
    renderOptions(destino, lugares)

    function findLugar(id) {
        const n = Number(id)
        return lugares.findIndex(lugar => lugar.id === n)
    }

    origen?.addEventListener('change', (e) => {
        const idx = findLugar(e.target.value)
        if (idx === -1) {
            destino.innerHTML = ''
            return
        }
        const destinos = lugares.filter(lugar => lugar.id !== idx)
        renderOptions(destino, destinos, true)
    })
}