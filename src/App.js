import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStarterPokemon } from "./actions/index";
import { fetchRandomPokemon } from "./actions/index";
import Pokemon from "./components/Pokemon/Pokemon";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import "./App.css";

const renderPokemon = ({ data: pokemon }) => {
  return pokemon && (
    <Pokemon
      key={pokemon.id}
      img={pokemon.sprites.front_default}
      name={pokemon.name}
      height={pokemon.height}
      weight={pokemon.weight}
      baseExperience={pokemon.base_experience}
    />
  );
};

function App({
  fetchStarterPokemon,
  fetchRandomPokemon,
  starterPokemon,
  randomPokemon,
}) {
  useEffect(() => {
    fetchStarterPokemon(["7", "4", "1"]);
  }, [fetchStarterPokemon]);

  const renderStarterPokemon = (pokemonArr) =>
    pokemonArr.map((pokeObj) => renderPokemon(pokeObj));

  return (
    <>
      <Header> Pokemon </Header>
      <ul className="pokemon-list">
        <Button onClick={() => fetchRandomPokemon()}>
          Find Random Pokemon
        </Button>
        {renderPokemon(randomPokemon)}
        {renderStarterPokemon(starterPokemon)}
      </ul>
    </>
  );
}

const mapStateToProps = ({ pokemon }) => {
  return {
    starterPokemon: pokemon.starterPokemon,
    randomPokemon: pokemon.randomPokemon,
  };
};

export default connect(mapStateToProps, {
  fetchStarterPokemon,
  fetchRandomPokemon,
})(App);
