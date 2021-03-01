import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { fetchStarterPokemon } from "./actions/index";
import { fetchRandomPokemon } from "./actions/index";
import Pokemon from "./components/Pokemon";

// Component Hierarchy: App -> PokemonCards(3)
class App extends Component {
  componentDidMount() {
    this.props.fetchStarterPokemon(["7", "4", "1"]);
  }

  // Refactor: the rendering/displaying of cards could be in a page
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
    // var randomPokemonKeys = Object.keys(this.props.randomPokemon)
    // return randomPokemonKeys.map((key, id) => {
    //   console.log(this.props.randomPokemon[key].name, "this.props.randomPokemon[key].name")
    //   return <Pokemon key={id} name={this.props.randomPokemon[key].name}/>
    // })
    // for(let key in this.props.randomPokemon) {
    //   var img = this.props.randomPokemon[key].front_default
    // }
  }

  render() {
    // console.log(this.props.randomPokemon, "this.props.randomPokemon")
    // console.log(this.props, "this.props");
    return (
      <>
        <h1> Pokemon List </h1>
        <ul className="starter-list">{this.renderStarterPokemon()}</ul>
      <button onClick={() => this.props.fetchRandomPokemon()}> Find Random Pokemon </button>
      <div> {this.renderRandomPokemon()}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    starterPokemon: state.starterPokemon,
    randomPokemon: state.randomPokemon
  };
};

export default connect(mapStateToProps, {
  fetchStarterPokemon,
  fetchRandomPokemon
})(App);
