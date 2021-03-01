import pokeApi from "../apis/PokeApi";
import { FETCH_STARTER_POKEMON } from "../constants/starterPokemonReducer.constant";
import { FETCH_RANDOM_POKEMON } from "../constants/randomPokemonReducer.constant";

export const fetchStarterPokemon = (arr) => async (dispatch) => {
  var payload = [];
  for await (let num of arr) {
    var response = await pokeApi.get(`/pokemon/${num}`);
    payload.push(response);
  }
  console.log(payload, "payload")
  dispatch({
    type: FETCH_STARTER_POKEMON,
    payload,
  });
};

// helper function
const generateRandomNum = () => {
  var randomNum;
  randomNum = Math.floor(Math.random() * 811) + 1;
  return randomNum;
};

export const fetchRandomPokemon = () => async (dispatch) => {
  // const pokemonLimit = await pokeApi.get('/pokemon-species/?limit=0')

  // generate a random number between 1 and 811
  const randomNum = generateRandomNum();
  // then use that number in the API call
  const response = await pokeApi.get(`/pokemon/${randomNum}`);
  console.log(response, "response");
  dispatch({
    type: FETCH_RANDOM_POKEMON,
    payload: response.data,
  });
};



/** Solution 0
 * export const fetchSquirtle = () => async (dispatch) => {
  const response = await pokeApi.get(`/pokemon/7`);
  console.log(response)
  dispatch({
    type: FETCH_SQUIRTLE,
    payload: response.data
  });
};

export const fetchCharmander = () => async (dispatch) => {
  const response = await pokeApi.get(`/pokemon/4`);
  dispatch({
    type: FETCH_CHARMANDER,
    payload: response.data
  });
};

export const fetchBulbasaur = () => async (dispatch) => {
  const response = await pokeApi.get(`/pokemon/1`);
  dispatch({
    type: FETCH_BULBASAUR,
    payload: response.data
  });
};
 */

/** 
 * Solution 1:
 * 
 export const fetchStarterPokemon = (id) => async (dispatch) => {
   var finalURL = '';
   var baseURL = 'https://pokeapi.co/api/v2/pokemon/';
   finalURL = baseURL + `${id}`;
  var response = await pokeApi.get(`/pokemon/${id}`);
   var response = await axios.get(finalURL);
 
   dispatch({
     type: FETCH_STARTER_POKEMON,
     payload: response.data
   });
 };
 *
 */

/** Solution 2
 * Refactor using an array
 var payload = [];
 for await (let num of arr) {
   console.log(num, "num")
   var response = await pokeApi.get(`/pokemon/${num}`);
   payload.push(response);
  }
  * 
  create a new array 
  for of loop
  const response = await pokeApi.get(`/pokemon/${id}`);
  if error, then add async to loop
  add async to a for of loop 
  */

// export const fetchSquirtle = (id) => async (dispatch) => {
//   const response = await pokeApi.get(`/pokemon/${id}`);
//   // https://pokeapi.co/api/v2/pokemon/7/ Squirtle
//   dispatch({
//     type: "FETCH_SQUIRTLE",
//     payload: response.data,
//   });
// };

/** Solution 3
       * Promise.all() - contains three pending promises
       if resolved, will return payload
       if rejected, returns nothing
       *
       const payload = Promise.all( arr.map(async id => {
         const response = await pokeApi.get(`/${id}`);
         return response;
       }))

        dispatch({
    type: FETCH_STARTER_POKEMON,
    payload
  });
};
      */

// Refactor: would add try catch
