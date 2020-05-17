// Eliminar de Local Storage
localStorage.clear();

// Event Bubbling
// Sucede cuando tenemos por ejemplo un elemento card que tiene un evento a ejecutar al dar click,
// y dentro existe otro elemento de la card, como un botón o una imagen, que tiene sus propios
// eventos a ejecutar. Al dar click en el botón, se ejecuta su evento como el evento del padre
// pero en realidad solo queremos que se ejecute el del botón. Esto se puede solucionar con 
// Stop propagation o event delegation

const card = document.querySelector('.card')
const infoCard = document.querySelector('.info-card')
const agregrarCarrito = document.querySelector('.agregar-carrito')

card.addEventListener('click', e => {
  console.log('click en card')
  e.stopPropagation()
})
infoCard.addEventListener('click', e => {
  console.log('click en infoCard')
  e.stopPropagation()
})
agregrarCarrito.addEventListener('click', e => {
  e.preventDefault()
  console.log('click en agregrarCarrito')
  e.stopPropagation()
})