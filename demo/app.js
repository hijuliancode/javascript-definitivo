// RegEx

let valor, valor2, expReg;
expReg = /[0123456789]/ // o también /[0-9]/
valor = 1991;
valor2 = 'HOLA';
// console.log(expReg.test(valor)) // true: .test(regex) nos ayuda a verificar expresion regular
// console.log(expReg.test(valor2)) // false

// \D No es un número
// \d Sí es un número

// Una fecha en exp regular 20-10-2018
expReg = /\d\d-\d\d-\d\d\d\d/ ;
valor = '20-10-2018'

// Una fecha en exp regular 20-10-2018
expReg = /\d\d:\d\d/ ;
valor = '10:30 AM' // true

// // Una fecha en exp regular 20-10-2018
expReg = /\d\d:\d\d \D\D/;
valor = '10:30' // false
valor = '10:30 AM'

expReg = /\d+/; // Busca que haya uno o más números
valor = 'ABD' // false
valor = 'ABD1' // true
valor = 1991 // true

console.log(expReg.test(valor))