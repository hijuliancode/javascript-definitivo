// import * as cliente from "./cliente.js"; // En caso de muchas importancioens
// console.log(cliente.nombreCliente)

import { nombreCliente, ahorro, mostrarInformacion, Cliente } from "./cliente.js"
import { nombreEmpresa, ahorro as ahorroEmpresa, mostrarInformacion as infoEmpresa, categoria } from "./empresa.js"

console.log(nombreCliente)
console.log(nombreEmpresa)
console.log(ahorro)
console.log(ahorroEmpresa)


console.log(mostrarInformacion(nombreCliente, ahorro))
console.log(infoEmpresa(nombreEmpresa, ahorroEmpresa, categoria))