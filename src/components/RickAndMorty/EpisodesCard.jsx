import React, { useEffect, useState } from "react";
import "/src/styles/ApiRickAndMorty.css";

export const EpisodesCard = () => {
  const [rick, setPoke] = useState([]);

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const response = await fetch("http://localhost:5000/epi/get");
        const data = await response.json();
        const rick = data.obj;
        console.log(rick);
        setPoke(rick);
      } catch (error) {
        console.error('Error buscando personaje:', error);
      }
    }

    fetchEpisodes();
  }, []);

  return (
    <div className="rick-container">
      {rick.map((p, index) => (
        <div key={index} className="rick-card">
          <p>Id: {p.id_episode}</p>
          <p>Nombre: {p.name_episode}</p>
          <p>Episodio: {p.episode}</p>
        </div>
      ))}
    </div>
  );
};