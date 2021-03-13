import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchStarterPokemon } from "./actions/index";
import { fetchRandomPokemon } from "./actions/index";
import Pokemon from "./components/Pokemon/Pokemon";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.css";

const renderPokemon = ({ data: pokemon }) => (
  <Pokemon
    key={pokemon.id}
    img={pokemon.sprites.front_default}
    name={pokemon.name}
    height={pokemon.height}
    weight={pokemon.weight}
    baseExperience={pokemon.base_experience}
  />
);

function App({
  fetchStarterPokemon,
  fetchRandomPokemon,
  starterPokemon,
  randomPokemon,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    fetchStarterPokemon(["0", "4", "7"], isModalOpen, setIsModalOpen);
  }, [fetchStarterPokemon]);

  const renderStarterPokemon = (pokemonArr) =>
    starterPokemon.map((pokeObj) => renderPokemon(pokeObj));

  const returnImageLink = (imageObj) => {
    for (let imageKey in randomPokemon.sprites) {
      const frontImg = randomPokemon.sprites["front_default"];
      return frontImg;
    }
  };

  const renderRandomPokemon = (pokemonObj) => {
    if (Object.keys(randomPokemon).length === 0) {
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
  };

  const sortStarterPokemonByName = (pokemonArr) => {
    const alphabeticStarterPokemon = starterPokemon.sort((a, b) => {
      if (a.data.name < b.data.name) return -1;
      if (a.data.name > b.data.name) return 1;
      return 0;
    });
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header> Pokemon </Header>
      <ul className="pokemon-list">
        <Button onClick={() => fetchRandomPokemon(isModalOpen, setIsModalOpen)}>
          Find Random Pokemon
        </Button>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        {renderRandomPokemon()}
        {renderStarterPokemon()}
      </ul>
      <Modal isModalOpen={isModalOpen} onClose={onClose}>
        Random Pokemon Not Found
      </Modal>
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
