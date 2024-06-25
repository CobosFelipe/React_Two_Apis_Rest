import React from "react";
import { ApiRickAndMorty } from "./RickAndMorty/ApiRickAndMorty";
import '/src/styles/nav.css'

export const NavBar = ({ onChange }) => {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" onClick={()=>onChange('pokemon')}>
          <img src="https://cdn.icon-icons.com/icons2/851/PNG/512/pikachu_icon-icons.com_67535.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top me-2" />
          PokemonApi
          <i className="fa-solid fa-arrow-left arrow_left"></i>
        </a>
            SELECIONA UNA API
        <a className="navbar-brand d-flex align-items-center" onClick={()=>onChange('rick')}>
          <i className="fa-solid fa-arrow-right arrow_right"></i>
          <img src="/src/img/Morty_Sticker.png" alt="Logo" width="35" height="40" className="d-inline-block align-text-top me-2"/>
          Rick&MortyApi
        </a>
      </div>
    </nav>
  );
};
