import React, { useState } from "react";
import "/src/styles/ApiPokemon.css";

export const ApiPokemon = () => {
  return (
    <div className="container">
      <h2>POKEMON</h2>
      <div className="categories d-flex mt-4 justify-content-center">
        <div className="card text-bg-dark">
          <img src="https://www.mundodeportivo.com/alfabeta/hero/2021/07/Pokemon-TOP-7-de-los-rivales-mas-fuerte-de-Ash-Ketchum.jpg?width=1200" className="card-img-top" />
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              POKEMON
            </a>
          </div>
        </div>

        <div className="card text-bg-dark">
          <img src="https://th.bing.com/th/id/OIP.Sk-7C2x2XN-rT00NcGZi8gHaEK?rs=1&pid=ImgDetMain" className="card-img-top" />
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              HABILIDADES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
