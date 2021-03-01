import React, { Component } from "react";
import { connect } from "react-redux";
// import action creator from actions folder
import { fetchSquirtle } from "../actions/index";
// import { fetchCharmander } from "../actions/index";
// import { fetchBulbasaur } from "../actions/index";

// height
// b. weight
// c. default image of the pokemon (‘sprites’ attribute)
// d. name
// e. base_experience

class PokemonList extends Component {

    // Should I use a useEffect instead?
  componentDidMount() {
    this.props.fetchSquirtle();
    // this.props.fetchCharmander();
    // this.props.fetchBulbasaur();
  }

  renderOnePokemon() {
    return this.props.threePokemon.map((pokemon, id) => {
        console.log(pokemon, "pokemon")
      return (
      <div key={id}> 
        <h2> {pokemon.name} </h2>
      </div>
      )
    });
  }

  render() {
  
    return (
        <>
        <h1> Pokemons </h1>
        <div>  {this.renderOnePokemon()}</div>
        </>
    );
  }
}

const mapStateToProps = (state) => {
  return { threePokemon: state.threePokemon };
};
// this object will show up as the props object inside our component

export default connect(mapStateToProps, {
  fetchSquirtle,
//   fetchCharmander,
//   fetchBulbasaur,
})(PokemonList);
