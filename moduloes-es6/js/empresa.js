import { Cliente } from "./cliente.js";

// Exportar Variables
export const nombreEmpresa = 'Udemy'
export const ahorro = 2000000000
export const categoria = 'Aprendizaje'

// Exportar Funciones
export function mostrarInformacion(a, b, c) {
  return `Nombre: ${a} - Ahorro: ${b} - Categoría: ${c}`
}

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro)
    this.categoria = categoria
  }
  mostrarInformacion(a, b, c) {
    return `Nombre: ${this.nombre} - Ahorro: ${this.ahorro} - Categoría: ${this.categoria}`
  }
}