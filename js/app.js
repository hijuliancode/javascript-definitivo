localStorage.clear(); // Eliminar de Local Storage

// Traversing: Navegar a través de todo nuestro elemento
const cursos = document.querySelectorAll('.card')

console.log(cursos[0])
console.log(cursos[0].lastChild)
console.log(cursos[0].lastElementChild)
console.log(cursos[0].childElementCount)

console.log('--- --- ---')

let enlaces = document.querySelectorAll('a');
console.log(enlaces[0].parentElement.parentElement.parentElement.parentElement)

console.log('--- --- ---')
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'Nuevo Encabezado desde Traversing')

console.log('--- --- ---')
enlaces = document.querySelectorAll('.enlace');
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4])

// NodeTypes
// 1 - Elementos
// 2 - Atributos
// 3 - TextNode
// 8 - Comentarios
// 9 - Documentos
// 10 - Doctype
