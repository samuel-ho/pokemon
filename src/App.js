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

    // create a variable if index is greater than 2 // Boolean
    // randomPokemon={isRandomPokemon}
    // if index is greater than 2, then pass the randomPokemon as a prop
  
    // Could use a selector
    // If you have a big array, instead of using filter, you could use a selector
    // a place to write the logic out
    // useSelector()
    // selector goes in a selector folders
    // selector takes care of Boolean logic
  }

  render() {
    return (
      <>
        <Header> Pokemon </Header>
        <ul className="pokemon-list">
          {this.renderPokemon()}
          <Button onClick={() => this.props.fetchRandomPokemon()}>
            Find Random Pokemon
          </Button>
        </ul>
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
