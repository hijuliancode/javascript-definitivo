// import * as cliente from "./cliente.js"; // En caso de muchas importancioens
// console.log(cliente.nombreCliente)

import { nombreCliente, ahorro, mostrarInformacion, Cliente } from "./cliente.js";

// console.log(mostrarInformacion(nombreCliente, ahorro))



// Utilizando la clase importada

const cliente = new Cliente('Meraki', 200000)
console.log(cliente)
console.log(cliente.nombre)
console.log(cliente.ahorro)