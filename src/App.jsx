import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ApiRickAndMorty } from "./components/RickAndMorty/ApiRickAndMorty";
import { ApiPokemon } from "./components/Pokemon/ApiPokemon";
import { PokemonCard } from "./components/Pokemon/PokemonCard";

function App() {
  const [mostrar, setMostrar] = useState("pokemon");

  return (
    <>
      <NavBar onChange={setMostrar}/>
      {mostrar === "pokemon" ? <ApiPokemon /> : mostrar === "rick" ? <ApiRickAndMorty /> : "No encontrado"}
    </>
  );
}

export default App;
