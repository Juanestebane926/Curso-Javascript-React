// =============================
// Clase 3 - Actividad PokeAPI (versión con ejercicios)
// =============================

// Referencias a elementos del DOM. Los alumnos deberán usar
// estos elementos para mostrar estado y la tarjeta del pokemon.
const btnAleatorio = document.getElementById("btn-aleatorio");
const btnBuscar = document.getElementById("btn-buscar");
const inputNumero = document.getElementById("numero-pokemon");
const estado = document.getElementById("estado");
const pokemonCard = document.getElementById("pokemon-card");

// Listeners: mantienen la UX, no hace falta modificarlos.
btnAleatorio.addEventListener("click", mostrarPokemonAleatorio);
btnBuscar.addEventListener("click", buscarPokemonPorNumero);
inputNumero.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    buscarPokemonPorNumero();
  }
});

// ------------------------------------------------------------------
// Función para obtener un numero aleatorio 
// ------------------------------------------------------------------
function numeroAleatorio(min, max) {
  // Devuelve un entero entre min y max inclusive.
  // Los alumnos NO tienen que reimplementar esto hoy.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ------------------------------------------------------------------
// Ejercicio: mostrarPokemonAleatorio
// - Objetivo: usar `numeroAleatorio` y `mostrarPokemonPorId`.
// - TODO: completar si se desea, pero se deja como ejemplo funcional.
// ------------------------------------------------------------------
async function mostrarPokemonAleatorio() {
  // Usa la función helper para obtener un id entre 1 y 151
  const id = numeroAleatorio(1, 151);
  await mostrarPokemonPorId(id);
}

// ------------------------------------------------------------------
// Ejercicio: buscarPokemonPorNumero
// - Objetivo: validar el input del usuario y llamar a
//   `mostrarPokemonPorId(id)` cuando el número sea válido.
// - Reemplazar el contenido de esta función por un TODO para que
//   los alumnos la implementen durante la clase.
// ------------------------------------------------------------------
async function buscarPokemonPorNumero() {
  // Convertir el valor del input a Number (esto NO es tarea)
  const id = Number(inputNumero.value);
  // TODO: validar que `id` sea numérico y esté en el rango 1-151.
  // - Si inválido: escribir en `estado.textContent` y en
  //   `pokemonCard.innerHTML` un mensaje de error.
  // - Si válido: llamar `await mostrarPokemonPorId(id)`.
}

// ------------------------------------------------------------------
// Ejercicio principal: mostrarPokemonPorId
// - Objetivo: usar `fetch` con async/await para obtener datos desde
//   la PokeAPI, simplificar los datos con `simplificarPokemon` y
//   llamar `renderPokemon`.
// - Sustituir la implementación por un TODO para que los alumnos
//   completen los pasos dentro del bloque try/catch.
// ------------------------------------------------------------------
async function mostrarPokemonPorId(id) {
  estado.textContent = "Cargando...";
  pokemonCard.innerHTML = `<p>Buscando el pokemon #${id}...</p>`;

  try {
    // TODO: 1) hacer `fetch` a
    //    `https://pokeapi.co/api/v2/pokemon/${id}`
    //       y obtener `const data = await response.json()`
    //       (usar async/await)
    //       2) crear `const pokemonSimple = simplificarPokemon(data);`
    //       3) llamar `renderPokemon(pokemonSimple)`
    //       4) actualizar `estado.textContent` con el id cargado
    // Nota: no reescribir `simplificarPokemon` (se deja como helper).
  } catch (error) {
    estado.textContent = "No se pudo cargar el pokemon";
    pokemonCard.innerHTML = "<p>Ocurrio un error al buscar el pokemon.</p>";
    console.error("Error al cargar pokemon:", error);
  }
}

// ------------------------------------------------------------------
// Función helper: simplificarPokemon
// - La dejamos completa para no abrumar a los alumnos con todos los
//   campos que devuelve la API. Deben usar este objeto simplificado
//   en `renderPokemon`.
// ------------------------------------------------------------------
function simplificarPokemon(data) {
  return {
    id: data.id,
    nombre: data.name,
    imagen: data.sprites.front_default
  };
}

// ------------------------------------------------------------------
// Ejercicio: renderPokemon
// - Objetivo: recibir el objeto `pokemon` simplificado y pintar su
//   imagen y nombre dentro de `pokemonCard.innerHTML`.
// - Sustituir la implementación por un TODO para que lo implementen.
// ------------------------------------------------------------------
function renderPokemon(pokemon) {
  // TODO: usar `pokemon.id`, `pokemon.nombre` y `pokemon.imagen`
  // para componer el HTML de la tarjeta. Ejemplo de estructura:
  //   <img src="..." alt="..." />
  //   <h3>#ID Nombre</h3>
}
