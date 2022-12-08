console.log('Sucesso!')

// function convertPokemonTypesToLi(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${type.name}</li>`)
// }

function convertPokemonToHTML(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                <li class="type">poson</li>
            </ol>

            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    </li>
    `
}

const pokeOl =  document.getElementById('pokeId')


pokeAPI.getPokemons().then((pokemonList = []) => {
        
    pokeOl.innerHTML += pokemonList.map(convertPokemonToHTML).join('')

    // OU use o FOR - Mais códigos
    // for (let i = 0; i < pokemonList.length; i++) {
    //     const poke = pokemonList[i];
    //     console.log(poke)
    //     listItems.push(convertPokemonToHTML(poke))
    // }

})
.finally(() => console.log("Requisição Concluída!"))   