import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStarterPokemon } from "./actions/index";
import { fetchRandomPokemon } from "./actions/index";
import Pokemon from "./components/Pokemon/Pokemon";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import "./App.css";

function App({ fetchStarterPokemon, fetchRandomPokemon, starterPokemon, randomPokemon}) {

  useEffect(() => {
    fetchStarterPokemon(["7", "4", "1"]);
  }, [fetchStarterPokemon])

  const renderStarterPokemon = (pokemonArr) => {
    return starterPokemon.map((pokemon, id) => {
      return (
        <Pokemon
          key={id}
          img={pokemon.data.sprites.front_default}
          name={pokemon.data.name}
          height={pokemon.data.height}
          weight={pokemon.data.weight}
          baseExperience={pokemon.data.base_experience}
        />
      );
    });
  }

  const returnImageLink = (imageObj) => {
    for(let imageKey in randomPokemon.sprites) {
      const frontImg = randomPokemon.sprites['front_default']
      return frontImg;
    }
  }

  const renderRandomPokemon = (pokemonObj) => {
    if(Object.keys(randomPokemon).length === 0) {
      return null;
    } else {
      return (
        <Pokemon
          img={returnImageLink()}
          name={randomPokemon.name}
          height={randomPokemon.height}
          weight={randomPokemon.weight}
          baseExperience={randomPokemon.base_experience}
        />
      );
    }
  }
    return (
      <>
        <Header> Pokemon </Header>
        <ul className="pokemon-list">
          <Button onClick={() => fetchRandomPokemon()}>
            Find Random Pokemon
          </Button>
          {renderRandomPokemon()}
          {renderStarterPokemon()}
        </ul>
      </>
    );
  }

const mapStateToProps = (state) => {
  return {
    starterPokemon: state.pokemon.starterPokemon,
    randomPokemon: state.pokemon.randomPokemon,
  };
};

export default connect(mapStateToProps, {
  fetchStarterPokemon,
  fetchRandomPokemon,
})(App);
