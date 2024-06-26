import React, { useState } from "react";
import "/src/styles/ApiPokemon.css";

export const CrearHabilidad = () => {
  const [formData, setFormData] = useState({
    id_ability: "",
    name: "",
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
      id_ability: formData.id_ability,
      name: formData.name,
    };

    try {
      const response = await fetch('http://localhost:5000/abi/post', {
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
    <form className="formulario-habilidad" onSubmit={manejarSubmit}>
      <h2 className="titulo-formulario mt-1">CREANDO HABILIDAD</h2>
      <div className="mb-2">
        <label htmlFor="idAbility" className="form-label">Id Habilidad</label>
        <input
          type="number"
          className="form-control"
          id="idAbility"
          name="id_ability"
          value={formData.id_ability}
          onChange={manejarChange}
          placeholder="Id Habilidad"
        />
        <div className="invalid-feedback">Por favor ingrese un id valido</div>
      </div>
      <div className="mb-2">
        <label htmlFor="nombreHabilidad" className="form-label">Nombre Habilidad</label>
        <input
          type="text"
          className="form-control"
          id="nombreHabilidad"
          name="name"
          value={formData.name}
          onChange={manejarChange}
          placeholder="Nombre Habilidad"
        />
        <div className="invalid-feedback">Por favor ingrese un nombre valido</div>
      </div>
      <button type="submit" className="btn btn-primary">
        CREAR
      </button>
    </form>
  );
};
