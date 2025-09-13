export function pagina2() {
    const clase = document.getElementById('clases')
    const pasaje = document.getElementById('pasajes')
    const ubicacion = document.getElementById('ubicaciones')
    const nSilla = document.getElementById('N-sillas')
    const form = document.getElementById('form-pag2')


    clase.addEventListener('change', (e) => {
        ubicacion.innerHTML = ''
        if (e.target.value === 'Económica') {
            nSilla.setAttribute('max', 50)
            nSilla.setAttribute('min', 9)
            ubicacion.appendChild(new Option(''))
            ubicacion.appendChild(new Option('Ventanilla'))
            ubicacion.appendChild(new Option('Pasillo'))
            ubicacion.appendChild(new Option('Centro'))
        }
        if (e.target.value === 'Ejecutiva') {
            nSilla.setAttribute('max', 8)
            nSilla.setAttribute('min', 1)
            ubicacion.appendChild(new Option(''))
            ubicacion.appendChild(new Option('Ventanilla'))
            ubicacion.appendChild(new Option('Pasillo'))
        }
    })

    function renderPasaje(cantidad) {
        const cantPer = `
            <div class="second-form-container-nm">
                <div>
                    <label for="">Apellido y Nombre</label><br>
                    <input required type="text" max="100">
                </div>
                <div>
                    <label for="">DNI</label><br>
                    <input required type="numeric" min="8" max="8">
                </div>
                <div>
                    <label for="">Fecha de Nacimiento</label><br>
                    <input required type="date">
                </div>
            </div>

            <div class="">
                <label for="sexo">Sexo</label><br>
                <div class="gender-content">
                    <input type="radio" name="sexo">
                    <label for="">M</label>
                    <input type="radio" name="sexo">
                    <label for="">F</label>
                </div>
            </div>

            <div class="buttoner-form">
                <button>agregar</button>
            </div>
        `
        for (let i = 0; i < cantidad; i++) {
            form.insertAdjacentHTML('beforeend', cantPer);
        }
    }

    pasaje.addEventListener('change', (e) => {
        renderPasaje(e.target.value)
    })


    

}