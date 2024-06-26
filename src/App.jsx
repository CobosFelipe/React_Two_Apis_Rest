import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ApiRickAndMorty } from "./components/RickAndMorty/ApiRickAndMorty";
import { ApiPokemon } from "./components/Pokemon/ApiPokemon";

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
