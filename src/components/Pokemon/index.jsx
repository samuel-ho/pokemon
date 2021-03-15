import React from "react";
import "./Pokemon.css";

function PokemonCard({ img, name, height, weight, baseExperience }) {
  return (
    <div className="pokemon-card">
      <div className="img-container">
        <img className="pokemon-img" alt="Front_Image" src={img} />
      </div>
      <div>
        <ul className="pokemon-content">
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
