// Iterators
// Ofrecen un poco más de flexibilidad y control sobre la ejecución del código.
// La ventaja principal de utilizar un iterador es que tienes control total en cada iteración

// Un iterador que vaya paso a paso
function crearIterador(carrito) {
  // Inicializar el indice
  let i = 0
  return {
    siguiente: () => {
      let fin = (i >= carrito.length)

      // Leer el valor siempre y cuando no hayamos llegado al fin (al final del carrito)
      let valor = !fin ? carrito[i++] : undefined

      return {
        fin: fin,
        valor: valor
      }
    }
  }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4']
const recorrerCarrito = crearIterador(carrito)

console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())