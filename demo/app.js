// MAPS
// Al igual que los sets son listas ordenadas
// Almacenan los valores como llave y valor
// Pueden almacenar cualquier tipo de dato

let cliente = new Map()

// Agregar al Map
cliente.set('nombre', 'Ginna')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)

console.log(cliente)

console.log('---')

// Acceder a los valores
console.log(cliente.get('nombre'))

console.log('---')

//// Métodos de los Maps

// obtener el tamaño
console.log(cliente.size);

// comprobar que un valor existe
console.log(cliente.has('tipo'));
console.log(cliente.has('apellido'));

// borrar propiedad
cliente.delete('saldo')
console.log(cliente)

// Borrar todo el contenido
cliente.clear()
console.log(cliente)


////////// Parametros por defecto

const paciente = new Map(
  [
    ['nombre', 'paciente'],
    ['habitacion', 'Sin definir'],
    ['despertar', 'Sin definir']
  ]
)
paciente.set('nombre', 'Meraki')
paciente.set('habitacion', '201')
paciente.set('habitacion', '203') // Al igual que el set elimina duplicados, pero este toma el último que se le paso

console.log(paciente)

// Iterar un Map
paciente.forEach((value, index) => {
  console.log(`${index}: ${value}`);
  
})