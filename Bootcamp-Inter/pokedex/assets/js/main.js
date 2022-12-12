console.log('Sucesso!')
const pokeOl =  document.getElementById('pokeId')
const loadMoreButton = document.getElementById('loadMore')

const maxRecords = 251
const limit = 10
let offset = 0

// function innit() {
//     const maxRecords = prompt("Digite a quantidade limite de POKEMONS: ")
// }

function loadPokemonItens(offset, limit) {

    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {  
        const newHTML = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                <li class="type">poson</li>
            </ol>

            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
		</li>

        `).join('')

        pokeOl.innerHTML += newHTML

    })

      
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecords = offset + limit
    

    if (qtdRecords >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, limit)

        loadMoreButton.parentElement.removeChild(loadMore)
    }else {
        loadPokemonItens(offset, limit)
    }
})

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}