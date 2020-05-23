// Symbols

const simbolo = Symbol()
const simbolo2 = Symbol('Descripción aquí')

console.log(simbolo)
console.log(simbolo2)

// Cada symbol es diferente de otro, son únicos en la ejecución de javascript
console.log(Symbol() === Symbol()) // false


///////

let nombre = Symbol()
let apellido = Symbol()

// Crear una persona
let persona = {}
persona.nombre = 'Ginna'
persona[nombre] = 'Meraki' // Para asignar Symbol debe ser con con llaves cuadradas []
persona[apellido] = 'SC'
persona.saldo = 1000
persona.tipoCliente = 'Gold'

console.log(persona) // Los symbols se muestran en el objeto
console.log(persona.nombre) // Pero no se acceden con punto (.) los symbols,
console.log(persona[apellido]) // deben ser con []

// Se consideran como si fueran propiedades privadas
// Y al iterar el objeto los symbols no se mostrarán
for(let i in persona) {
  console.log(`${i}: ${persona[i]}`) // No se imprimen los symbols
}