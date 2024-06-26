import React, { useState } from "react";
import "/src/styles/ApiRickAndMorty.css";

export const CrearPersonaje = () => {
  const [formData, setFormData] = useState({
    id_character: "",
    name_character: "",
    status: "",
    gender: "",
    species: "",
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
      id_character: formData.id_character,
      name_character: formData.name_character,
      status: formData.status,
      gender: formData.gender,
      species: formData.species,
    };

    try {
      const response = await fetch("http://localhost:5000/rym/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const result = await response.json();
      console.log("Datos del formulario enviados", result);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <form className="formulario-personaje" onSubmit={manejarSubmit}>
      <h2 className="titulo-formulario mt-1">CREANDO PERSONAJE</h2>
      <div className="mb-2">
        <label htmlFor="idPersonaje" className="form-label">
          Id Personaje
        </label>
        <input
          type="number"
          className="form-control"
          id="idPersonaje"
          name="id_character"
          value={formData.id_character}
          onChange={manejarChange}
          placeholder="Id Personaje"
        />
        <div className="invalid-feedback">Por favor ingrese un id valido</div>
      </div>
      <div className="mb-2">
        <label htmlFor="nombrePersonaje" className="form-label">
          Nombre personaje
        </label>
        <input
          type="text"
          className="form-control"
          id="nombrePersonaje"
          name="name_character"
          value={formData.name_character}
          onChange={manejarChange}
          placeholder="Nombre personaje"
        />
        <div className="invalid-feedback">Por favor ingrese un nombre valido</div>
      </div>
      <div className="mb-2">
        <label className="form-label">Estado personaje</label>
        <select className="form-select" name="status" value={formData.status} onChange={manejarChange}>
          <option value="" disabled>Seleccione un estado</option>
          <option value={true}>
            {'Vivo'}
          </option>
          <option value={false}>
            {'Muerto'}
          </option>
        </select>
      </div>
      <div className="mb-2">
        <label className="form-label">Genero personaje</label>
        <select className="form-select" name="gender" value={formData.gender} onChange={manejarChange}>
          <option value="" disabled>Seleccione un genero</option>
          <option value={'Masculino'}>
            Masculino
          </option>
          <option value={'Femenino'}>
            Femenino
          </option>
        </select>
      </div>
      <div className="mb-2 centrar-fila">
        <label htmlFor="speciePersonaje" className="form-label">
          Especie personaje
        </label>
        <input
          type="text"
          className="form-control"
          id="speciePersonaje"
          name="species"
          value={formData.species}
          onChange={manejarChange}
          placeholder="Especie personaje"
        />
        <div className="invalid-feedback">Por favor ingrese una especie valida</div>
      </div>
      <button type="submit" className="btn btn-primary">
        CREAR
      </button>
    </form>
  );
};
