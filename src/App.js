import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStarterPokemon } from "./actions/index";
import { fetchRandomPokemon } from "./actions/index";
import Pokemon from "./components/Pokemon";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchStarterPokemon(["7", "4", "1"]);
  }

  renderPokemon() {
    return this.props.starterPokemon.map((pokemon, id) => {
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

  render() {
    return (
      <>
        <h1 className="pokemon-header"> Pokemons </h1>
        <ul className="pokemon-list">{this.renderPokemon()}</ul>
        <button className="find-button" onClick={() => this.props.fetchRandomPokemon()}>
          Find Random Pokemon
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    starterPokemon: state.starterPokemon,
  };
};

export default connect(mapStateToProps, {
  fetchStarterPokemon,
  fetchRandomPokemon,
})(App);
