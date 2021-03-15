export const sortByName = (pokemonArr) => {
    const sortedStarterPokemon = [...pokemonArr];
    sortedStarterPokemon = pokemonArr.sort((pokemon1, pokemon2) => {
        if(pokemon1.data.name > pokemon2.data.name) return 1;
        if(pokemon1.data.name < pokemon2.data.name) return -1;
        return 0;
    })
    // return the sorted array
    return sortedStarterPokemon;
}