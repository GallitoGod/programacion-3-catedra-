export class View {
    constructor() {
        this.modelo = null
        this.tabla = document.getElementById('tabla-reservas')

    }

    setModelo(modelo) {
        this.modelo = modelo
    }

    addReserva(value) {
        const reserva = this.modelo.addReserva(value)
        this.createRow(reserva)
    }

    createRow(reserva) {
        const row = this.tabla.insertRow()
        row.setAttribute('id', reserva.id)
        row.innerHTML = `
            <td>${reserva.nombre}</td>
            <td>${reserva.destino}</td>
            <td>${reserva.clase}</td>
        `
    }

    render() {
        const reservas = this.modelo.getReservas()
        reservas.forEach((reserva) => this.createRow(reserva));
    }
}