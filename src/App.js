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
  if(!pokemon) return null;
  return <Pokemon
    key={pokemon.id}
    img={pokemon.sprites.front_default}
    name={pokemon.name}
    height={pokemon.height}
    weight={pokemon.weight}
    baseExperience={pokemon.base_experience}
  />
}

function App({
  fetchStarterPokemon,
  fetchRandomPokemon,
  starterPokemon,
  randomPokemon,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchStarterPokemon(["1", "4", "7"], setIsModalOpen);
  }, [fetchStarterPokemon]);

  const renderStarterPokemon = (pokemonArr) =>
    pokemonArr.map((pokeObj) => renderPokemon(pokeObj));

  // not less code
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
        {renderPokemon(randomPokemon)}
        {renderStarterPokemon(starterPokemon)}
      </ul>
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
