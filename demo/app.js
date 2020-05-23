const cliente  = {
  tipo: 'Premium',
  saldo: 3000,
  datos: {
    nombre: 'Meraki',
    apellido: 'SC',
    residencia: {
      ciudad: 'Sibaté'
    }
  },
  movimientos: ['12-03-2018', '12-03-2017', '12-03-2016']
}

let {
  tipo,
  datos: {residencia},
  movimientos: [primerMovimiento],
  movimientos: [ , , ultimoMovimiento]
} = cliente;
console.log(tipo);
console.log(residencia);
console.log(primerMovimiento);
console.log(ultimoMovimiento);