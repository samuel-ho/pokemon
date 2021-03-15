import { FETCH_STARTER_POKEMON, FETCH_RANDOM_POKEMON } from "../constants";

const initialState = {
  starterPokemon: [],
  randomPokemon: {},
};

export default (state = initialState, action) => {
  
  switch (action.type) {
    case FETCH_STARTER_POKEMON:
      let pokemon = { ...state };
      let updatedPokemon = pokemon.starterPokemon.concat(action.payload);
      return {
        ...state,
        starterPokemon: updatedPokemon,
      };

    case FETCH_RANDOM_POKEMON:
      return {
        ...state,
        randomPokemon: action.payload,
      };

    default:
      return state;
  }
};
