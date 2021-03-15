import pokeApi from "../apis/PokeApi";
import { FETCH_STARTER_POKEMON } from "../constants/starterPokemonReducer.constant";
import { FETCH_RANDOM_POKEMON } from "../constants/starterPokemonReducer.constant";

export const fetchStarterPokemon = (arr, setIsModalOpen) => async (dispatch) => {
  const payload = [];

  for await (let num of arr) {
      try {
    const response = await pokeApi.get(`/pokemon/${num}`);
    payload.push(response);
  } 
  catch {
    setIsModalOpen(true);
  }
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

export const fetchRandomPokemon = (setIsModalOpen) => async (dispatch) => {
  
  try {
    const randomNum = generateRandomNum();
    const response = await pokeApi.get(`/pokemon/${randomNum}`);
    var payload = response.data;
  } catch {
    setIsModalOpen(true);
  }

  dispatch({
    type: FETCH_RANDOM_POKEMON,
    payload,
  });
};
