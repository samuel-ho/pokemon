import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStarterPokemon } from "./actions/index";
import { fetchRandomPokemon } from "./actions/index";
import Pokemon from "./components/Pokemon/Pokemon";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchStarterPokemon(["7", "4", "1"]);
  }

  renderStarterPokemon() {
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

  renderRandomPokemon() {
    return (
      <Pokemon
        name={this.props.randomPokemon.name}
        height={this.props.randomPokemon.height}
        weight={this.props.randomPokemon.weight}
        baseExperience={this.props.randomPokemon.base_experience}
      />
    );
  }

  render() {
    return (
      <>
        <Header> Pokemon </Header>
        <ul className="pokemon-list">
          <Button onClick={() => this.props.fetchRandomPokemon()}>
            Find Random Pokemon
          </Button>
          {this.renderRandomPokemon()}
          {this.renderStarterPokemon()}
        </ul>
      </>
    );
  }
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
