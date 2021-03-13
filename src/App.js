import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchStarterPokemon } from "./actions/index";
import { fetchRandomPokemon } from "./actions/index";
import Pokemon from "./components/Pokemon/Pokemon";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.css";

function App({fetchStarterPokemon, fetchRandomPokemon, starterPokemon,randomPokemon}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    fetchStarterPokemon(["7", "4", "1"], isModalOpen, setIsModalOpen);
  }, [fetchStarterPokemon]);

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
  };

  const returnImageLink = (imageObj) => {
    const { front_default, back_default } = randomPokemon.sprites
    return front_default ? front_default : back_default
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

  console.log(randomPokemon, "randomPokemon")

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
