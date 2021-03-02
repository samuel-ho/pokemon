import { combineReducers } from "redux";
import starterPokemonReducer from "./starterPokemonReducer";

export default combineReducers({
  starterPokemon: starterPokemonReducer,
});
