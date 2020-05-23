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

//////// CLASE 2
//////// CLASE 2
//////// CLASE 2

// Negar la expresión ^ es el operador de negación
expReg = /[^0-9]/;
valor = 1991; // false
valor = 'hola'; // true

// La sintaxis {1, 2}
expReg = /\d{1,2}-\d{1,2}-\d{4}/; // En los corchetes podemos indicar, de cuanto a cuanto queremos que vaya la cadena
valor = '7-5-2019'; // true
valor = '07-05-2019'; // true
valor = '07-05-19'; // false
valor = '07-05-019'; // false

// Letras o números se evalucan con \w
expReg = /\w+/;
valor = 'Texto de prueba'; // true
valor = 'Texto de prueba 01'; // true
valor = 'Texto de prueba 01!"·'; // true // los simbolos estan dentro del string
valor = 199222; // true
valor = ' '; // false: El espacio vacio no cuenta como números o letras

// Texto únicamente en mayusculas
expReg = /([A-Z])\w+/
valor = 'texto minusculas' // false
valor = 42384239 // false
valor = 'TEXTO EN MAYUSCULAS' // true
valor = 'TEXTO EN MAYUSCULAS fskj' // true ¿why?

// Texto únicamente en minusculas
expReg = /([a-z])\w+/
valor = 42384239 // false
valor = 'TEXTO EN MAYUSCULAS' // false
valor = 'texto minusculas' // true

// console.log(expReg.test(valor))

const  expRegMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/;

let email = 'jst@mx.com';
console.log(expRegMail.test(email)); // true

email = 'sdfdf.com';
console.log(expRegMail.test(email)); // false