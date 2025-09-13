export class Modelo {
    constructor() {
        this.view = null
        this.reservas = JSON.parse(localStorage.getItem('reservas'))
        if (!this.reservas || this.reservas.length < 1) {
            this.reservas = [
                {
                    id: 0,
                    destino: "destino1",
                    origen: "origen1",
                    fecha: 0,
                    hora: 0,
                    nombre: "nombre1",
                    DNI: 0,
                    fechaNac: 0,
                    sexo: "sexo1",
                    clase: "clase1",
                    ubicacion: "ubicacion1"
                },
            ]
            this.currentId = 1
        } else {
            this.reservas[this.reservas.length - 1].id + 1
        }
    }

    setView(view) {
        this.view = view
    }

    save() {
        localStorage.setItem('reservas', JSON.stringify(this.reservas))
    }

    addReserva(value) {
        reserva = {
            id: this.currentId++,
            destino: value.destino,
            origen: value.origen,
            fecha: value.fecha,
            hora: value.hora,
            nombre: value.nombre,
            DNI: value.DNI,
            fechaNac: value.fechaNac,
            sexo: value.sexo,
            clase: value.clase,
            ubicacion: value.ubicacion
        }
        this.reservas.push(reserva)
        this.save()
        return {...reserva}
    }

    getReservas() {
        return this.reservas.map((reserva) => ({...reserva}))
    }

    findReserva(id) {
        return this.reservas.findIndex(reserva => {reserva.id === id})
    }

    removeReserva(id) {
        const index = this.findReserva(id)
        this.reservas.splice(index, 1)
        this.save()
    }

    editReserva(id, value) {
        const index = this.findReserva(id)
        Object.assign(this.reservas[index], value)
        this.save()
    }   
}