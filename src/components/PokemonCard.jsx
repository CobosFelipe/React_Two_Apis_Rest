import React, { useState } from "react";
import "/src/styles/ApiPokemon.css";

export const PokemonCard = () => {
  async function FetchPokemon() {
    const data = await fetch("http://localhost:5000/pok/get");
    const pokemon = await data.json();
    const poke = pokemon.obj;
    console.log(poke);
  }
  FetchPokemon();

  return (
    <div>
      {poke.map((p, index) => {
        <div key={index} className="poke-card">
          <p>{p.pokemon_name}</p>
        </div>;
      })}
    </div>
  );
};
