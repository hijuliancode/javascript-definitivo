// Sets
// Permite crear una lista de valores sin duplicados
// Cuando algo es duplicado simplemente no se agrega en el set

let carrito = new Set()
carrito.add('Camisa')
carrito.add('Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #3')
carrito.add('Disco #1') // No se agregan elementos que ya existan

console.log(carrito)
console.log('carrito.size', carrito.size) // el tamaño del Set

console.log('---')

let numeros = new Set([1, 2, 3, 4, 5, 6, 7, 1, 4, 5, 2, 5, 7, 2, 4, 8]) // Omite los elementos repetidos
console.log('numeros', numeros)

console.log('---')

// Podemos verificar si existe algo dentro del set
console.log('carrito Tiene Camisa?', carrito.has('Camisa')) // true
console.log('carrito Tiene Guitarra?', carrito.has('Guitarra')) // false

console.log('---')

// Podemos eliminar
carrito.delete('Camisa')
console.log('Eliminando camisa', carrito)

console.log('---')

// Podemos eliminat todos los elementos
numeros.clear()
console.log('eliminando numeros', numeros)

console.log('---')

// Podemos Iterar los Sets
console.log('Iterando')
carrito.forEach((item, index) => { // La llave y el valor son iguales en los sets
  console.log(`${index}: ${item}`)
})

// Convertir un set en un arreglo
const arregloCarrito = [...carrito]
console.log(arregloCarrito);
