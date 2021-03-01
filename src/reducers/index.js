import { combineReducers } from 'redux';
import starterPokemonReducer from './starterPokemonReducer'
import randomPokemonReducer from './randomPokemonReducer'

export default combineReducers({
    starterPokemon: starterPokemonReducer,
    randomPokemon: randomPokemonReducer,
})