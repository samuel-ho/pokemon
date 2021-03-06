import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStarterPokemon, fetchRandomPokemon } from "./actions";
import Pokemon from "./components/Pokemon";
import MainHeader from "./components/MainHeader";
import Header from "./components/Header";
import Button from "./components/Button";
import { pokemonIds } from "./constants/";
import "./App.css";

const renderPokemon = ({ data: pokemon }) => {
  return (
    pokemon && (
      <Pokemon
        key={pokemon.id}
        img={pokemon.sprites.front_default}
        name={pokemon.name}
        height={pokemon.height}
        weight={pokemon.weight}
        baseExperience={pokemon.base_experience}
      />
    )
  );
};

function App({
  fetchStarterPokemon,
  fetchRandomPokemon,
  starterPokemon,
  randomPokemon,
}) {
  useEffect(() => {
    fetchStarterPokemon(pokemonIds);
  }, [fetchStarterPokemon, pokemonIds]);

  const renderStarterPokemon = (pokemonArr) =>
    pokemonArr.map((pokeObj) => renderPokemon(pokeObj));

  return (
    <>
      <MainHeader> Pokemon </MainHeader>
      <ul className="pokemon-list">
        <div className="wrapper">
          <Button
            onClick={() => {
              fetchRandomPokemon();
            }}
          >
            Find Random Pokemon
          </Button>
          <Header>Random Pokemon</Header>
          {renderPokemon(randomPokemon)}
          <Header>Starter Pokemon</Header>
          {renderStarterPokemon(starterPokemon)}
        </div>
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
