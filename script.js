
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
const inputBox = document.querySelector("h1");

inputBox.innerHTML += `
    <div>
        <label for="pokemonName">Catch Pokèmon Name: </label>
        <input id="pokemonName" type="text">
    </div>`;

//search pokemon by name
const pokemonName = document.querySelector("#pokemonName");

const nameSearch = (event) => {
    container.innerHTML = "";
    pokemonArray.forEach(pokemon => {
        if (pokemon.name.includes(event.target.value.toLowerCase())) {
            container.innerHTML += cardDisplay(pokemon);
        }
    })
}
pokemonName.addEventListener("input", nameSearch);



//search pokemon by type
inputBox.innerHTML += `
    <div>
        <label for="pokemonType">Catch Pokèmon Type: </label>
        <input id="pokemonType" type="text">
    </div>`;

const pokemonType = document.querySelector("#pokemonType");

const reset = (event) => {
    container.innerHTML = "";
    pokemonArray.forEach(pokemon => {
        container.innerHTML += cardDisplay(pokemon)
    });
}
const typeSearch = (event) => {
    container.innerHTML = "";
    pokemonArray.forEach(pokemon => {
        for (let i = 0; i < pokemon.types.length; i++) {
            if (pokemon.types[i].includes(event.target.value.toLowerCase())) {
                container.innerHTML += cardDisplay(pokemon);
            }
        }
    })
    //when clear typeSearch, pokemon with more than one type will show more than once:
    if (event.target.value == "") {
        reset();
    }
}
pokemonType.addEventListener("input", typeSearch)



//change the number of result
inputBox.innerHTML += `
    <div>
        <label for="pokemonNumber">Catch Pokèmon Number: </label>
        <input id="pokemonNumber" type="text">
    </div>`;

const pokemonNumber = document.querySelector("#pokemonNumber");

const numberResult = (event) => {
    container.innerHTML = "";
    if (0 < event.target.value <= 151) {
        for (let i = 0; i < event.target.value; i++) {
            container.innerHTML += cardDisplay(pokemonArray[i]);
        }
    } else {
        reset();
    }
}
pokemonNumber.addEventListener("input", numberResult)