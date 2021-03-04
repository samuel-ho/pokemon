import pokeApi from "../apis/PokeApi";
import { FETCH_STARTER_POKEMON } from "../constants/starterPokemonReducer.constant";
import { FETCH_RANDOM_POKEMON } from "../constants/starterPokemonReducer.constant";

export const fetchStarterPokemon = (arr) => async (dispatch) => {
  const payload = [];

  for await (let num of arr) {
    const response = await pokeApi.get(`/pokemon/${num}`);
    payload.push(response);
  }

  dispatch({
    type: FETCH_STARTER_POKEMON,
    payload,
  });
};

const generateRandomNum = () => {
  let randomNum;
  const pokemonLimit = 811;
  randomNum = Math.floor(Math.random() * pokemonLimit) + 1;
  return randomNum;
};

export const fetchRandomPokemon = () => async (dispatch) => {
  const randomNum = generateRandomNum();
  const payload = await pokeApi.get(`/pokemon/${randomNum}`);

  dispatch({
    type: FETCH_RANDOM_POKEMON,
    payload,
  });
};
