import React from "react";
import "./Pokemon.css";
// DUCKS system vs rails system
// REdux Toolkit docs talks about DUCKS

// Sticky header might need to be in a container or above
// overflow: scroll

// use flexbox

function PokemonCard({ img, name, height, weight, baseExperience }) {
  return (
    <div className="pokemon-card">
      <div className="img-container">
        <img className="pokemon-img" alt="No Image" src={img} />
      </div>
      <div className="pokemon-content">
        <ul>
          <li>
            <strong> {name} </strong>
          </li>
          <li> Height: {height} </li>
          <li> Weight: {weight} </li>
          <li> Base Experience: {baseExperience} </li>
        </ul>
      </div>
    </div>
  );
}

export default PokemonCard;
