// import * as cliente from "./cliente.js"; // En caso de muchas importancioens
// console.log(cliente.nombreCliente)

import { nombreCliente, ahorro, mostrarInformacion, mostrarNombre } from "./cliente.js";

console.log(mostrarInformacion(nombreCliente, ahorro))

const mostrarNombreCliente = mostrarNombre(nombreCliente);
console.log(mostrarNombreCliente)