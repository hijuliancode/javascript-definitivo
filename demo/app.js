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

let { nombre, datos, datos: { cuenta, ubicacion } } = cliente;

console.log(nombre)
console.log(datos)
console.log(cuenta)
console.log(ubicacion)