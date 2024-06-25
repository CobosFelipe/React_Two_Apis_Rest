import React, { useEffect, useState } from "react";
import "/src/styles/ApiPokemon.css";

export const RickCard = () => {
  const [rick, setPoke] = useState([]);

  useEffect(() => {
    async function fetchRick() {
      try {
        const response = await fetch("http://localhost:5000/rym/get");
        const data = await response.json();
        const rick = data.obj;
        console.log(rick);
        setPoke(rick);
      } catch (error) {
        console.error('Error buscando personaje:', error);
      }
    }

    fetchRick();
  }, []);

  return (
    <div className="poke-container">
      {rick.map((p, index) => (
        <div key={index} className="poke-card">
          <p>Id: {p.id_character}</p>
          <p>Nombre: {p.name_character}</p>
          <p>Estado: {p.status ? 'Vivo' : 'Muerto'}</p>
          <p>Genero: {p.gender}</p>
          <p>Especie: {p.species}</p>
        </div>
      ))}
    </div>
  );
};