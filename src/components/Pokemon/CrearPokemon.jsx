import React, { useState } from "react";
import "/src/styles/ApiPokemon.css";

export const CrearPokemon = ({ abilities, characters }) => {
  const [formData, setFormData] = useState({
    id_pokemon: "",
    pokemon_name: "",
    height: "",
    weight: "",
    abilities: "",
    id_character: "",
  });

  const manejarChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    // Crear un objeto con los datos del formulario
    const data = {
      id_pokemon: formData.id_pokemon,
      pokemon_name: formData.pokemon_name,
      height: formData.height,
      weight: formData.weight,
      abilities: formData.abilities,
      id_character: formData.id_character,
    };

    try {
      const response = await fetch('http://localhost:5000/pok/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = await response.json();
      console.log('Datos del formulario enviados', result);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <form className="formulario-pokemon" onSubmit={manejarSubmit}>
      <h2 className="titulo-formulario mt-1">CREANDO POKEMON</h2>
      <div className="mb-2">
        <label htmlFor="idPokemon" className="form-label">Id Pokemon</label>
        <input
          type="number"
          className="form-control"
          id="idPokemon"
          name="id_pokemon"
          value={formData.id_pokemon}
          onChange={manejarChange}
          placeholder="Id Pokemon"
        />
        <div className="invalid-feedback">Por favor ingrese un id valido</div>
      </div>
      <div className="mb-2">
        <label htmlFor="nombrePokemon" className="form-label">Nombre Pokemon</label>
        <input
          type="text"
          className="form-control"
          id="nombrePokemon"
          name="pokemon_name"
          value={formData.pokemon_name}
          onChange={manejarChange}
          placeholder="Nombre Pokemon"
        />
        <div className="invalid-feedback">Por favor ingrese un nombre valido</div>
      </div>
      <div className="mb-2">
        <label htmlFor="heightPokemon" className="form-label">Altura Pokemon</label>
        <input
          type="number"
          className="form-control"
          id="heightPokemon"
          name="height"
          value={formData.height}
          onChange={manejarChange}
          placeholder="Altura Pokemon"
        />
        <div className="invalid-feedback">Por favor ingrese una altura valida</div>
      </div>
      <div className="mb-2">
        <label htmlFor="weightPokemon" className="form-label">Peso Pokemon</label>
        <input
          type="number"
          className="form-control"
          id="weightPokemon"
          name="weight"
          value={formData.weight}
          onChange={manejarChange}
          placeholder="Peso Pokemon"
        />
        <div className="invalid-feedback">Por favor ingrese un peso valido</div>
      </div>
      <div className="mb-2">
        <label className="form-label">Seleccione una habilidad</label>
        <select
          className="form-select"
          name="abilities"
          value={formData.abilities}
          onChange={manejarChange}
        >
          <option value="" disabled>Seleccione una habilidad</option>
          {abilities.map((p, index) => (
            <option key={index} value={p.id_ability}>
              {p.id_ability}. {p.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="form-label">Seleccione un personaje</label>
        <select
          className="form-select"
          name="id_character"
          value={formData.id_character}
          onChange={manejarChange}
        >
          <option value="" disabled>Seleccione un personaje</option>
          {characters.map((p, index) => (
            <option key={index} value={p.id_character}>
              {p.id_character}. {p.name_character}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        CREAR
      </button>
    </form>
  );
};
