// Eliminar de Local Storage
localStorage.clear();

// Event Bubbling
// Sucede cuando elementos, dentro de otro elemento tienen funciones, al dar click a un elemento
// dentro de otro se ejecutan ambas funcionas, ejemplo, un botón dentro de un card, al dar click
// en el botón solo el botón debería ejecutar su función, pero además del botón la ejecutan sus
// parents, que también tenían funciones a ejecutar en caso de click.

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