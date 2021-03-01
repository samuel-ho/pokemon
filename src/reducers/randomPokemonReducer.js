import { FETCH_RANDOM_POKEMON } from "../constants/starterPokemonReducer.constant";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_RANDOM_POKEMON:
    return {...action.payload};

    default:
      return state;
  }
};
