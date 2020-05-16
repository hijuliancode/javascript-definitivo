// Eliminar de Local Storage
localStorage.clear();

// Variables
const encabezado = document.querySelector('#encabezado')
const enlaces = document.querySelectorAll('.enlace')
const boton = document.querySelector('#vaciar-carrito')

// Click
// boton.addEventListener('click', obtenerEvento)
// Double Click
// boton.addEventListener('dblclick', obtenerEvento)
// Mouse enter
// boton.addEventListener('mouseenter', obtenerEvento)
// // Mouse leave
// boton.addEventListener('mouseleave', obtenerEvento)
// // Mouse over
// boton.addEventListener('mouseover', obtenerEvento)
// // Mouse out
// boton.addEventListener('mouseout', obtenerEvento)
// // Mouse down
boton.addEventListener('mousedown', obtenerEvento)
// // Mouse up
boton.addEventListener('mouseup', obtenerEvento)

function obtenerEvento(e) {
  e.preventDefault()
  console.log(`Evento: ${e.type}`);
}
