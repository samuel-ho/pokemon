import React from "react";

// DUCKS system vs rails system
// REdux Toolkit docs talks about DUCKS

// Sticky header might need to be in a container or above
// overflow: scroll

// use flexbox

function PokemonCard({ id, pokemon }) {
  return (
    <div className="card">
      <div key={id}> 
        <h2> {pokemon.name} </h2>
      </div>
      {/* <div className="img-container">
        <img className="artist-img" alt="Unavailable" />
      </div>
      <div className="content">
        <ul>
          <li>{name}</li>
          <li>
            <a href={url}> Go to Artist Profile</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default PokemonCard;