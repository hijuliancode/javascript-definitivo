const Cliente = {
  imprimirSaldo: function() {
    return `Hola ${this.nombre}, tu saldo es ${this.saldo}`;
  },
  retirarSaldo: function(retiro) {
    return this.saldo -= retiro;
  }
}
// Crear el objeto
const vale = Object.create(Cliente);
vale.nombre = 'Valentina';
vale.saldo = 200000;

vale.retirarSaldo(200);

console.log(vale.imprimirSaldo())