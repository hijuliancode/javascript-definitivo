// Asignación por destructuring
const cliente = {
  tipo: 'Premium',
  nombre: 'Ginna',
  datos: {
    ubicacion: {
      ciudad: 'Bogotá',
      pais: 'Colombia'
    },
    cuenta: {
      desde: '10-12-2012',
      saldo: 4000
    }
  }
}

let { nombre, datos, datos: { cuenta, ubicacion }, telefono = 'No hay télefono' } = cliente;

console.log(nombre)
console.log(telefono)
console.log(datos)
console.log(cuenta)
console.log(cuenta.saldo)
console.log(ubicacion)