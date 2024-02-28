// Obtiene el elemento HTML donde se mostrarán los Pokémon
const listaPokemon = document.querySelector("#listaPokemon");

// Obtiene todos los elementos con la clase .btn-header, que se usarán para filtrar los Pokémon por tipo
const botonesHeader = document.querySelectorAll(".btn-header");

// La URL base de la API de Pokémon para obtener información de los Pokémon
let URL = "https://pokeapi.co/api/v2/pokemon/";

// Bucle para solicitar información de los primeros 151 Pokémon
for (let i = 1; i <= 151; i++) {
  // Realiza una solicitud fetch a la API de Pokémon para obtener información específica de cada Pokémon
  fetch(URL + i)
    .then((response) => response.json()) // Convierte la respuesta a JSON
    .then((data) => mostrarPokemon(data)); // Llama a la función mostrarPokemon con los datos del Pokémon
}

// Función para mostrar la información de un Pokémon en el DOM
function mostrarPokemon(poke) {
  // Crea una lista de los tipos de Pokémon, formateada como párrafos con clases específicas para cada tipo
  let tipos = poke.types.map(
    (type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`
  );
  tipos = tipos.join("");

  // Formatea el ID del Pokémon para tener un formato específico (prependiendo ceros si es necesario)
  let pokeId = poke.id.toString();
  if (pokeId.length === 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId.length === 2) {
    pokeId = "0" + pokeId;
  }

  // Crea un nuevo elemento div con la clase pokemon y asigna HTML que incluye el ID, la imagen, el nombre y los tipos del Pokémon
  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
            </div>
        </div>
    `;

  // Añade el nuevo elemento div a listaPokemon
  listaPokemon.append(div);
}

// Añade event listeners a los botones del header para filtrar los Pokémon por tipo
botonesHeader.forEach((boton) =>
  boton.addEventListener("click", (event) => {
    // Obtiene el id del botón clickeado
    const botonId = event.currentTarget.id;

    // Borra el contenido actual de listaPokemon
    listaPokemon.innerHTML = "";

    // Realiza una nueva solicitud fetch a la API de Pokémon para cada Pokémon
    for (let i = 1; i <= 151; i++) {
      fetch(URL + i)
        .then((response) => response.json()) // Convierte la respuesta a JSON
        .then((data) => {
          // Si el botón clickeado es "ver-todos", muestra cada Pokémon sin filtrar
          if (botonId === "ver-todos") {
            mostrarPokemon(data);
          } else {
            // Si el botón clickeado corresponde a un tipo específico de Pokémon, solo muestra los Pokémon que coinciden con ese tipo
            const tipos = data.types.map((type) => type.type.name);
            if (tipos.some((tipo) => tipo.includes(botonId))) {
              mostrarPokemon(data);
            }
          }
        });
    }
  })
);
