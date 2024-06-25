import React, { useState } from "react";
import "/src/styles/ApiPokemon.css";
import { PokemonCard } from "./PokemonCard";
import { AbilitiesCard } from "./AbilitiesCard";

export const ApiPokemon = () => {
  const [show, setShow] = useState("");
  return (
    <>
      <div className="container">
        <h2>POKEMON</h2>
        <div className="categories d-flex mt-4 justify-content-center">
          <div className="card text-bg-dark">
            <img
              src="https://www.mundodeportivo.com/alfabeta/hero/2021/07/Pokemon-TOP-7-de-los-rivales-mas-fuerte-de-Ash-Ketchum.jpg?width=1200"
              className="card-img-top"
            />
            <div className="card-body">
              <a onClick={() => setShow("pokemon")} className="btn btn-primary">
                POKEMON
              </a>
            </div>
          </div>

          <div className="card text-bg-dark">
            <img src="https://th.bing.com/th/id/OIP.Sk-7C2x2XN-rT00NcGZi8gHaEK?rs=1&pid=ImgDetMain" className="card-img-top" />
            <div className="card-body">
              <a onClick={() => setShow("habilidades")} className="btn btn-primary">
                HABILIDADES
              </a>
            </div>
          </div>
        </div>
      </div>
      {show === "pokemon" ? <PokemonCard /> : show === "habilidades" ? <AbilitiesCard /> : ""}
    </>
  );
};
