import { FETCH_STARTER_POKEMON } from "../constants/starterPokemonReducer.constant";
import { FETCH_RANDOM_POKEMON } from "../constants/starterPokemonReducer.constant";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_STARTER_POKEMON:
      const newState = [...state].concat(action.payload);
      return newState;

    case FETCH_RANDOM_POKEMON:
      const copyOfState = [...state]
      if(copyOfState.length === 3) {
        copyOfState.push(action.payload);
        return copyOfState;
      }
      else if(copyOfState.length === 4) {
        copyOfState.pop();
        copyOfState.push(action.payload);
        return copyOfState;
      }

    default:
      return state;
  };
};

/*
 * Refactored Solution: 
 switch(action.type) {
   case(FETCH_STARTER_POKEMON):
   var newState = [...state];
   newState.push(action.payload);
   return newState;
 
   default: 
   return state;
 }
 **
 switch (action.type) {
   case "FETCH_SQUIRTLE": // case "FETCH STARTER POKEMON"
   // create copy of state here  
   newState.push(action.payload);
     return newState;
 
   case "FETCH_CHARMANDER":
     newState.push(action.payload);
     return newState;
 
   case "FETCH_BULBASAUR":
     newState.push(action.payload);
     return newState
**/

/** Solution 1 
 * export default (state = [], action) => {
  var newState = state.slice(); 
  switch (action.type) {
    case FETCH_SQUIRTLE: // Refactor: case "FETCH STARTER POKEMON"
      newState.push(action.payload);
      return newState;

    case FETCH_CHARMANDER:
      newState.push(action.payload);
      return newState;

    case FETCH_BULBASAUR:
      newState.push(action.payload);
      return newState;

    default:
      return state;
  }
};
*/
