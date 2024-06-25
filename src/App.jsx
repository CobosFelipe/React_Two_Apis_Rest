import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ApiRickAndMorty } from "./components/ApiRickAndMorty";
import { ApiPokemon } from "./components/ApiPokemon";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const [mostrar, setMostrar] = useState("pokemon");

  return (
    <>
      <NavBar onChange={setMostrar}/>
      {mostrar === "pokemon" ? <ApiPokemon /> : mostrar === "rick" ? <ApiRickAndMorty /> : "No encontrado"}
      <PokemonCard />
    </>
  );
}

export default App;
