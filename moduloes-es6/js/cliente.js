// Exportar Variables
export const nombreCliente = 'Pedro'
export const ahorro = 2000

// Exportar Funciones
export function mostrarInformacion() {
  return `Nombre: ${nombreCliente} - Ahorro: ${ahorro}`
}

// Exportar Clase

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre,
    this.ahorro = ahorro
  }
  mostrarInformacion() {
    return `Nombre: ${this.nombre} - Ahorro: ${this.ahorro}`
  }
}