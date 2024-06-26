import React, { useEffect, useState } from "react";
import "/src/styles/ApiPokemon.css";

export const PokemonCard = () => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("http://localhost:5000/pok/get");
        const data = await response.json();
        const pokemon = data.obj;
        setPoke(pokemon)
        console.log(pokemon);
      } catch (error) {
        console.error('Error buscando Pokemon:', error);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <div className="poke-container">
      {poke.map((p, index) => (
        <div key={index} className="poke-card">
          <p>Id: {p.id_pokemon}</p>
          <p>Nombre: {p.pokemon_name}</p>
          <p>Altura: {p.height}m</p>
          <p>Peso: {p.weight}Kg</p>
          <button id={index+1} className="btn btn-secondary btn-sm mt-2 mb-1">Editar</button>
        </div>
      ))}
    </div>
  );
};