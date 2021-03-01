import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
// import { fetchStarterPokemon } from "./actions/index";
import { fetchSquirtle } from "./actions/index";
import { fetchCharmander } from "./actions/index";
import { fetchBulbasaur } from "./actions/index";
// import Pokemon from "./components/Pokemon";

// App -> PokemonCards -> PokemonCards

class App extends Component {
  componentDidMount() {
    
    this.props.fetchSquirtle();
    this.props.fetchCharmander();
    /* WORKING 
     */ 
    
    /* 
    Refactor: this.props.fetchStarterPokemon([7, 4, 1]);
    fetchStarterPokemon('7');
    fetchStarterPokemon('4');
    fetchStarterPokemon('1');
    */
  }

  // Refactor: the rendering/displaying of cards could be in a page
  renderStarterPokemon() {
    return this.props.starterPokemon.map((pokemon, id) => {
      return (
        <div key={id}>
          <h2> {pokemon.name} </h2>
        </div>
      );
    });
  }
  render() {
    {
      console.log(this.props);
    }
    return (
      <>
        <h1> Pokemon List</h1>
        <div>{this.renderStarterPokemon()}</div>
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
  fetchSquirtle,
  fetchCharmander,
  fetchBulbasaur,
})(App);
