function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.tipoCliente = function () {
    let tipo;
    if(this.saldo > 1000) {
      tipo = 'gold';
    } else if(this.saldo > 500) {
      tipo = 'platinum';
    } else {
      tipo = 'normal';
    }
    return tipo;
  }
}

const Persona1 = new Cliente('Pedro', 20000);
const Persona2 = new Cliente('Karen', 6000);

console.log(Persona1)
console.log(Persona2)