import React, { useState } from "react";
import "/src/styles/ApiRickAndMorty.css";

export const CrearEpisodio = () => {
  const [formData, setFormData] = useState({
    id_episode: "",
    name_episode: "",
    episode: "",
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
      id_episode: formData.id_episode,
      name_episode: formData.name_episode,
      episode: formData.episode,
    };

    try {
      const response = await fetch("http://localhost:5000/epi/post", {
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
    <form className="formulario-episodio" onSubmit={manejarSubmit}>
      <h2 className="titulo-formulario mt-1">CREANDO EPISODIO</h2>
      <div className="mb-2">
        <label htmlFor="idEpisodio" className="form-label">
          Id Episodio
        </label>
        <input
          type="number"
          className="form-control"
          id="idEpisodio"
          name="id_episode"
          value={formData.id_episode}
          onChange={manejarChange}
          placeholder="Id Episodio"
        />
        <div className="invalid-feedback">Por favor ingrese un id valido</div>
      </div>
      <div className="mb-2">
        <label htmlFor="nombreEpisodio" className="form-label">
          Nombre episodio
        </label>
        <input
          type="text"
          className="form-control"
          id="nombreEpisodio"
          name="name_episode"
          value={formData.name_episode}
          onChange={manejarChange}
          placeholder="Nombre episodio"
        />
        <div className="invalid-feedback">Por favor ingrese un nombre valido</div>
      </div>
      <div className="mb-2 centrar-fila">
        <label htmlFor="episodio" className="form-label">
          Episodio
        </label>
        <input
          type="text"
          className="form-control"
          id="episodio"
          name="episode"
          value={formData.episode}
          onChange={manejarChange}
          placeholder="Episodio"
        />
        <div className="invalid-feedback">Por favor ingrese un nombre valido</div>
      </div>
      <button type="submit" className="btn btn-primary">
        CREAR
      </button>
    </form>
  );
};
