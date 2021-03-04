import { FETCH_STARTER_POKEMON } from "../constants/starterPokemonReducer.constant";
import { FETCH_RANDOM_POKEMON } from "../constants/starterPokemonReducer.constant";

export default (state = [], action) => {
  let stateCopy = [...state];

  switch (action.type) {
    case FETCH_STARTER_POKEMON:
      return stateCopy.concat(action.payload);

    case FETCH_RANDOM_POKEMON:
      if (stateCopy.length === 3) {
        stateCopy.push(action.payload);
        return stateCopy;
      } else {
        stateCopy.pop();
        stateCopy.push(action.payload);
        return stateCopy;
      }

    default:
      return state;
  }
};
