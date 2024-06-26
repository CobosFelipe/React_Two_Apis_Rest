import React, { useEffect, useState } from "react";
import "/src/styles/ApiPokemon.css";
import { PokemonCard } from "./PokemonCard";
import { AbilitiesCard } from "./AbilitiesCard";
import { CrearPokemon } from "./CrearPokemon";
import { CrearHabilidad } from "./CrearHabilidad";

export const ApiPokemon = () => {
  const [show, setShow] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [characters, setCharacters] = useState([])

  // Fetch para la lista de personajes
  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch("http://localhost:5000/rym/get");
        const data = await response.json();
        const character = data.obj;
        setCharacters(character);
        console.log(character);
      } catch (error) {
        console.error("Error buscando Personajes:", error);
      }
    }

    fetchCharacters();
  }, []);

  // Fetch para la lista de habilidades
  useEffect(() => {
    async function fetchAbilities() {
      try {
        const response = await fetch("http://localhost:5000/abi/get");
        const data = await response.json();
        const ability = data.obj;
        setAbilities(ability);
        console.log(ability);
      } catch (error) {
        console.error("Error buscando Habilidades:", error);
      }
    }

    fetchAbilities();
  }, []);

  // Validacion del componente a renderizar
  const renderComponent = () => {
    switch (show) {
      case "pokemon":
        return <PokemonCard />;
      case "crear_pokemon":
        return <CrearPokemon abilities={abilities} characters={characters} />;
      case "habilidades":
        return <AbilitiesCard />;
      case "crear_habilidad":
        return <CrearHabilidad />;
      default:
        return null;
    }
  };

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
                VER POKEMON
              </a>
              <a onClick={() => setShow("crear_pokemon")} className="btn btn-primary">
                CREAR POKEMON
              </a>
            </div>
          </div>

          <div className="card text-bg-dark">
            <img src="https://th.bing.com/th/id/OIP.Sk-7C2x2XN-rT00NcGZi8gHaEK?rs=1&pid=ImgDetMain" className="card-img-top" />
            <div className="card-body">
              <a onClick={() => setShow("habilidades")} className="btn btn-primary">
                VER HABILIDADES
              </a>
              <a onClick={() => setShow("crear_habilidad")} className="btn btn-primary">
                CREAR HABILIDAD
              </a>
            </div>
          </div>
        </div>
      </div>
      {renderComponent()}
    </>
  );
};
