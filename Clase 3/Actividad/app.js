// =============================
// Clase 3 - Actividad PokeAPI
// =============================

const btnAleatorio = document.getElementById("btn-aleatorio");
const btnBuscar = document.getElementById("btn-buscar");
const inputNumero = document.getElementById("numero-pokemon");
const estado = document.getElementById("estado");
const pokemonCard = document.getElementById("pokemon-card");

btnAleatorio.addEventListener("click", mostrarPokemonAleatorio);
btnBuscar.addEventListener("click", buscarPokemonPorNumero);
inputNumero.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    buscarPokemonPorNumero();
  }
});

async function mostrarPokemonAleatorio() {
  const id = numeroAleatorio(1, 151);
  await mostrarPokemonPorId(id);
}

async function buscarPokemonPorNumero() {
  const id = Number(inputNumero.value);

  if (!id || id < 1 || id > 151) {
    estado.textContent = "Escribe un numero valido";
    pokemonCard.innerHTML = "<p>Ingresa un numero entre 1 y 151.</p>";
    return;
  }

  await mostrarPokemonPorId(id);
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function mostrarPokemonPorId(id) {
  estado.textContent = "Cargando...";
  pokemonCard.innerHTML = `<p>Buscando el pokemon #${id}...</p>`;

  try {
    // TODO: usa fetch con async/await para traer el pokemon
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const pokemonSimple = simplificarPokemon(data);

    renderPokemon(pokemonSimple);
    estado.textContent = `Pokemon #${pokemonSimple.id} cargado`;
  } catch (error) {
    estado.textContent = "No se pudo cargar el pokemon";
    pokemonCard.innerHTML = "<p>Ocurrio un error al buscar el pokemon.</p>";
    console.error("Error al cargar pokemon:", error);
  }
}

function simplificarPokemon(data) {
  // TODO: deja solo los datos que vamos a mostrar en pantalla
  return {
    id: data.id,
    nombre: data.name,
    imagen: data.sprites.front_default
  };
}

function renderPokemon(pokemon) {
  // TODO: usa el objeto simple para mostrar imagen y nombre
  pokemonCard.innerHTML = `
    <img src="${pokemon.imagen}" alt="${pokemon.nombre}" />
    <h3>#${pokemon.id} ${pokemon.nombre}</h3>
  `;
}
