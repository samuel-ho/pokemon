import { FETCH_STARTER_POKEMON } from "../constants/starterPokemonReducer.constant";
import { FETCH_RANDOM_POKEMON, SORT_STARTER_POKEMON } from "../constants/starterPokemonReducer.constant";

const initialState = {
  starterPokemon: [],
  randomPokemon: {},
};

export default (state = initialState, action) => {
  
  switch (action.type) {
    case FETCH_STARTER_POKEMON:
      let stateCopy = { ...state };
      let updatedPokemon = stateCopy.starterPokemon.concat(action.payload);
      return {
        ...state,
        starterPokemon: updatedPokemon,
      };

    case FETCH_RANDOM_POKEMON:
      return {
        ...state,
        randomPokemon: action.payload,
      };

    case SORT_STARTER_POKEMON:
      let pokemon = {...state};
      console.log(action.payload, "action.payload")
      return {
        ...state,
        starterPokemon: action.payload
      }

    default:
      return state;
  }
};
