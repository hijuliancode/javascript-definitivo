// Eliminar de Local Storage
localStorage.clear();

// Variables
const encabezado = document.querySelector('#encabezado')
const enlaces = document.querySelectorAll('.enlace')
const boton = document.querySelector('#vaciar-carrito')
const busqueda = document.querySelector('#buscador')

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
// boton.addEventListener('mousedown', obtenerEvento)
// // Mouse up
// boton.addEventListener('mouseup', obtenerEvento)

// Inputs
// busqueda.addEventListener('keydown', obtenerEvento)
// busqueda.addEventListener('keyup', obtenerEvento)
// busqueda.addEventListener('keypress', obtenerEvento)
// busqueda.addEventListener('focus', obtenerEvento)
// busqueda.addEventListener('blur', obtenerEvento)
// busqueda.addEventListener('cut', obtenerEvento)
// busqueda.addEventListener('copy', obtenerEvento)
// busqueda.addEventListener('paste', obtenerEvento)
// busqueda.addEventListener('input', obtenerEvento)
busqueda.addEventListener('change', obtenerEvento) // Mejor para selects


function obtenerEvento(e) {
  e.preventDefault()
  console.log(busqueda.value)
  console.log(`Evento: ${e.type}`)
}
