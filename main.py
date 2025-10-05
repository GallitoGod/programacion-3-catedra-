#Trabajo practico numero 4 - Gallo Pablo - MU:01733

class Instrumento:
    def __init__(self, id, precio, tipo):
        self.id = id
        self.precio = precio
        self.tipo = tipo


class Sucursal:
    def __init__(self):
        self.intrumentos = []

    def setInstrumento(self, instrumento: Instrumento):
        self.instrumentos.append(instrumento)

    def borrarInstrumento(self, id):
        self.instrumentos.pop(id)

    def listarInstrumentos(self):
        for instrumento in self.instrumentos:
            print(f"Instrumento: {instrumento.id}, {instrumento.precio}, {instrumento.tipo}")

    def instrumentosPorTipo(self, tipo):
        for instrumento in self.instrumentos:
            if instrumento.tipo == tipo:
                print(f"Instrumento tipo {tipo}: {instrumento.id}, {instrumento.precio}")


class Fabrica:
    def __init__(self):
        self.sucursales = []
        
    def porcInstrumentosPorTipo(self, sucursal):
        if len(sucursal.instrumentos) == 0:
            print("No tiene instrumentos")
            return
        cuerda = 0
        viento = 0
        percusion = 0
        for instrumento in sucursal.instrumentos:
            if (instrumento.tipo == "cuerda"):
                ++cuerda
            elif (instrumento.tipo == "viento"):
                ++viento
            elif (instrumento.tipo == 'percusion'):
                ++percusion
        print(f"Porcentaje de instrumentos de percusion: {(percusion/len(sucursal.intrumentos))*100}%")
        print(f"Porcentaje de instrumentos de viento: {(viento/len(sucursal.intrumentos))*100}%")
        print(f"Porcentaje de instrumentos de cuerda: {(cuerda/len(sucursal.intrumentos))*100}%")
    
    def setSucursal(self, sucursal: Sucursal):
        self.sucursales.append(sucursal)
    


def main():
    def ej1():
        number = [1,2,3,4,5]
        while True:
            value = int(input("Ingresar un valor entre el 0 al 9: "))
            if (0 <= value <= 9):
                break
            else:
                print("Valor no aceptable.")
        flag = list(filter(lambda x: x == value, number))
        if flag == []:
            print("El numero no se encuentra en la lista.")
        else:   print("El numero esta en la lista.")
    ej1()
    
    def ej2():
        usuario = {"Marcela", "David", "Elvira", "Elvira","Marcos"}
        administradores = {"Juan", "Marcela"}
        administradores.discard("Juan")
        administradores.add("Marcos")
        for persona in usuario:
            print(f"Usuario: {persona}")
        for persona in administradores:
            print(f"Administrador: {persona}")
    ej2()

    def ej3():
        usuarios_info = []
        while True:
            nombre = input("Ingrese el nombre: ")
            edad = int(input("Ingrese la edad: "))
            direccion = input("Ingrese la dirección: ")
            telefono = input("Ingrese el telefono: ")

            usuario_info = {
                "nombre": nombre,
                "edad": edad,
                "direccion": direccion,
                "telefono": telefono
            }

            usuarios_info.append(usuario_info)

            continuar = input("Desea ingresar otro usuario? (s/n): ").lower()
            if continuar != "s":
                break

        print("\nInformacion de usuarios:")
        for i, usuario in enumerate(usuarios_info, start=1):
            print(f"\nusuario {i}:")
            for clave, valor in usuario.items():
                print(f"{clave}: {valor}")
    ej3()

if __name__ == "__main__":
    main()
