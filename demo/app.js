function reservacion(completo, opciones) {
  // Destructuring forma anterior
  // opciones = opciones || {};
  // let metodo = opciones.metodoDePago,
  //     cantidad = opciones.cantidad,
  //     dias = opciones.dias;

  // Destructuring forma nueva
  let { metodoDePago, cantidad, dias } = opciones;

  console.log(metodoDePago)
  console.log(cantidad)
  console.log(dias)
}

reservacion(
  true,
  {
    metodoDePago: 'Tarjeta',
    cantidad: 2000,
    dias: 3
  }
)
console.log('---')
// Parametros por defecto de la función
function reservacion2(completo, { // Este sigue siendo un parametro
      metodoDePago = 'Efectivo',
      cantidad = 0,
      dias = 0
    } = {}
  ) { // El cuerpo de la función
    console.log(metodoDePago)
    console.log(cantidad)
    console.log(dias)
}
reservacion2(false)