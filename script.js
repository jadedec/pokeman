import { pokemonArray } from "./data/pokemon.js";

const container = document.querySelector(".card-container");

const cardDisplay = (pokemon) => {
    let pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
    return `<div class="card">
                <img src="${pokemon.sprite}" class="card_image">
                <div class="card_content">
                    <h2 class="card_heading">${pokemonName}</h2>
                    <p class="card_text">${pokemonName} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type pokemon.</p>
                </div>
            </div>`
}

pokemonArray.forEach(pokemon => {
    container.innerHTML += cardDisplay(pokemon);
})
