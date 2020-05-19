function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, tu saldo es ${this.saldo}`
}

function Empresa(nombre, saldo, telefono, tipo) {
  Cliente.call(this, nombre, saldo); // Heredamos las propiedades
  this.telefono = telefono;
  this.tipo = tipo;
}
// Además debemos heredar el prototipo
Empresa.prototype = Object.create(Cliente.prototype);

const Persona1 = new Cliente('Pedro', 20000);
const Empresa1 = new Empresa('Kodak', 6000, 1231231, "Fotografía");

console.log(Persona1)
console.log(Empresa1)