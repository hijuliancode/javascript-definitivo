// Eliminar de Local Storage
localStorage.clear();

// Event Bubbling
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