// =============================
// Clase 3 - Objetos, Arrays y Fetch
// =============================

const salidaObjeto = document.getElementById("salida-objeto");
const salidaMetodos = document.getElementById("salida-metodos");
const listaEstudiantes = document.getElementById("lista-estudiantes");
const btnPokemon = document.getElementById("btn-pokemon");
const estado = document.getElementById("estado");
const listaPokemon = document.getElementById("lista-pokemon");

// 1) Objetos en JavaScript
const estudiante = {
  nombre: "Juan",
  nota: 4.5
  // TODO: agrega edad
};

salidaObjeto.textContent = `nombre: ${estudiante.nombre}\nnota: ${estudiante.nota}`;
console.log("Objeto estudiante:", estudiante);
console.log("Nombre:", estudiante.nombre);

// 2) Array de objetos
const estudiantes = [
  { nombre: "Juan", nota: 4.5 },
  { nombre: "Maria", nota: 3.8 },
  { nombre: "Pedro", nota: 2.9 }
];

function renderConFor(items) {
  listaEstudiantes.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const e = items[i];
    listaEstudiantes.innerHTML += `<p>${e.nombre} - ${e.nota}</p>`;
  }
}

function renderConMap(items) {
  // TODO: usa map + join para devolver el HTML
  return "";
}

function renderEstudiantes(items) {
  // TODO: cambia a renderConMap(items) cuando lo implementes
  listaEstudiantes.innerHTML = renderConMap(items);
}

renderEstudiantes(estudiantes);

// 3) Metodos principales de arrays
function aplicarMetodos() {
  const lista = [...estudiantes];

  // TODO: crea un objeto nuevoEstudiante con nombre y nota
  const nuevoEstudiante = null;
  if (nuevoEstudiante) {
    lista.push(nuevoEstudiante);
  }

  // TODO: encuentra a Maria usando find
  const encontrado = null;

  // TODO: filtra aprobados (nota >= 3.0)
  const aprobados = [];

  // TODO: crea un array solo con nombres usando map
  const nombres = [];

  return { nuevoEstudiante, encontrado, aprobados, nombres };
}

const resultadoMetodos = aplicarMetodos();

salidaMetodos.textContent = JSON.stringify(resultadoMetodos, null, 2);
console.log("Metodos de arrays:", resultadoMetodos);

// 4) Fetch con PokeAPI
btnPokemon.addEventListener("click", cargarPokemon);

function renderPokemon(items) {
  // TODO: usa map + join para pintar los pokemon
  listaPokemon.innerHTML = "";
}

async function cargarPokemon() {
  estado.textContent = "Cargando...";
  listaPokemon.innerHTML = "";

  try {
    // TODO: reemplaza este mock por fetch + await
    // const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
    // const data = await response.json();
    const data = { results: [] };

    renderPokemon(data.results);
    estado.textContent = "Listo";
  } catch (error) {
    estado.textContent = "Error";
    console.error("Error en fetch:", error);
  }
}
