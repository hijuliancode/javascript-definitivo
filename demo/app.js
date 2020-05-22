// Async Await with API

async function leerTodos() {
  // esperar respuesta
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
  // proceder cuando la respuesta este hecha
  const datos = await respuesta.json()
  return datos
}

leerTodos()
  .then(todos => console.log(todos))