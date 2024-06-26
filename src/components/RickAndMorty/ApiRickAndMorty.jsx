import React, { useState } from "react";
import "/src/styles/ApiRickAndMorty.css";
import { RickCard } from "./RickCard";
import { EpisodesCard } from "./EpisodesCard";
import { CrearPersonaje } from "./CrearPersonaje";
import { CrearEpisodio } from "./CrearEpisodio";

export const ApiRickAndMorty = () => {
  const [show, setShow] = useState("");

  // Validacion del componente a renderizar
  const renderComponent = () => {
    switch (show) {
      case "personajes":
        return <RickCard />;
      case "crear_personaje":
        return <CrearPersonaje />;
      case "episodios":
        return <EpisodesCard />;
      case "crear_episodio":
        return <CrearEpisodio />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container">
        <h2>RICK AND MORTY</h2>
        <div className="categories d-flex mt-4 justify-content-center">
          <div className="card text-bg-dark">
            <img src="https://th.bing.com/th/id/OIP.oxOeJLfQdgpEJJ38IXFZEQHaEK?rs=1&pid=ImgDetMain" className="card-img-top" />
            <div className="card-body">
              <a onClick={()=>setShow("personajes")} className="btn btn-primary">
                VER PERSONAJES
              </a>
              <a onClick={()=>setShow("crear_personaje")} className="btn btn-primary">
                CREAR PERSONAJE
              </a>
            </div>
          </div>

          <div className="card text-bg-dark">
            <img
              src="https://vignette.wikia.nocookie.net/rickandmorty/images/0/07/S2e2_impressed_aliens.png/revision/latest?cb=20160919072720"
              className="card-img-top"
            />
            <div className="card-body">
              <a onClick={()=>setShow("episodios")} className="btn btn-primary">
                VER EPISODIOS
              </a>
              <a onClick={()=>setShow("crear_episodio")} className="btn btn-primary">
                CREAR EPISODIO
              </a>
            </div>
          </div>
        </div>
      </div>
      {renderComponent()} 
    </>
  );
};
