import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchStarterPokemon } from "./actions/index";
import { fetchRandomPokemon } from "./actions/index";
import Pokemon from "./components/Pokemon/Pokemon";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.css";

const renderPokemon = ({ data: pokemon }) => {
  if (!pokemon) return null;
  return (
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchStarterPokemon(["7", "4", "1"], setIsModalOpen);
  }, [fetchStarterPokemon, setIsModalOpen]);

  const renderStarterPokemon = (pokemonArr) =>
    pokemonArr.map(pokeObj => renderPokemon(pokeObj));

  const filteredStarterPokemon = (pokemonArr) => {
    // const filteredPokemon = pokemonArr.filter(pokemon => pokemon.data.name === 'bulbasaur')
    const filteredPokemon = [];
    for (let pokemon of pokemonArr) {
      if (pokemon.data.name === "b") {
        filteredPokemon.push(pokemon);
        return;
      }
    }
  };

  const sortStarterPokemonByName = pokemonArr => {
    const sortedArr = [...pokemonArr];
    sortedArr.sort((a, b) => {
      console.log(a.data.name, "a.data.name")
      if(a.data.name < b.data.name) return -1;
      if(a.data.name > b.data.name) return 1;
      return 0
    })
  }

  return (
    <>
      <Header> Pokemon </Header>
      <ul className="pokemon-list">
        <div className="wrapper"> 
        <Button onClick={() => fetchRandomPokemon(setIsModalOpen)}>
          Find Random Pokemon
        </Button>
        <Header> Random Pokemon </Header>
        {renderPokemon(randomPokemon)}
        <Header> Starter Pokemon </Header>
        {renderStarterPokemon(starterPokemon)}
        </div>
      </ul>
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        Random Pokemon Not Found
      </Modal>
      {sortStarterPokemonByName(starterPokemon)}
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
