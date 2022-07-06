
import { pokemonArray } from './data/pokemon.js';

const container = document.querySelector(".card-container");

const cardDisplay = (object) => {
    let objectName = object.name[0].toUpperCase() + object.name.substring(1);
    return (
        `<div class="card">
            <img src="${object.sprite}" class="card__image">
            <div class="card__content">
                <h2 class="card__heading">${objectName}</h2>
                <p class="card__text">${objectName} (#${object.id}) is a ${object.types.join(" & ")} pokemon.</p>
            </div>
        </div>`
    )
};

pokemonArray.forEach(pokemon => {
    container.innerHTML += cardDisplay(pokemon)
});



/////////////////////Extension////////////////
