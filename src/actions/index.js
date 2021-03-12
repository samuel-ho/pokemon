import pokeApi from "../apis/PokeApi";
import { FETCH_STARTER_POKEMON } from "../constants/starterPokemonReducer.constant";
import { FETCH_RANDOM_POKEMON } from "../constants/starterPokemonReducer.constant";
import Modal from '../components/Modal/Modal';

export const fetchStarterPokemon = (arr, isModalOpen, setIsModalOpen) => async (dispatch) => {
  const payload = [];

  try {
    for await (let num of arr) {
    const response = await pokeApi.get(`/pokemon/${num}`);
    payload.push(response);
  }
  } catch {
    setIsModalOpen(true);
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

export const fetchRandomPokemon = (isModalOpen, setIsModalOpen) => async (dispatch) => {
  
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
