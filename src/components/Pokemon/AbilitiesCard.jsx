import React, { useEffect, useState } from 'react'
import "/src/styles/ApiPokemon.css";

export const AbilitiesCard = () => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    async function fetchPokemonAbilities() {
      try {
        const response = await fetch("http://localhost:5000/abi/get");
        const data = await response.json();
        const pokemon = data.obj;
        setPoke(pokemon)
        console.log(pokemon);
      } catch (error) {
        console.error('Error buscando Abilities:', error);
      }
    }

    fetchPokemonAbilities();
  }, []);

  return (
    <div className="poke-container">
      {poke.map((p, index) => (
        <div key={index} className="poke-card">
          <p>Id: {p.id_ability}</p>
          <p>Nombre: {p.name}</p>
        </div>
      ))}
    </div>
  );
}
