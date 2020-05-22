// Promises
const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true
  if (descuento) {
    resolve('Descuento Aplicado')
  } else {
    reject('No se puede aplicar el descuento')
  }
})

aplicarDescuento
  .then(respuesta => {
    console.log(respuesta)
  }).catch(error => {
    console.log(error)
  })