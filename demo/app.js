// Variables
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

// Event Listeners
document.addEventListener('DOMContentLoaded', init)

// Functions
function init() {
  console.log('demo app')
}

function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais)
    callback()
  }, 2000);
}

function mostrarPaises() {
  setTimeout(() => {
    let html = '<ul>'
    paises.forEach(pais => {
      html += `<li>${pais}</li>`
    })
    html += '</ul>'
    document.getElementById('app').innerHTML = html
  }, 1000);
}

nuevoPais('Alemania (nuevo)', mostrarPaises)
mostrarPaises()