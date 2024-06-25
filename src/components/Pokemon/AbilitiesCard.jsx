import React from 'react'

export const AbilitiesCard = () => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    async function fetchPokemonAbilities() {
      try {
        const response = await fetch("http://localhost:5000/pok/get");
        const data = await response.json();
        const pokemon = data.obj;
        console.log(pokemon);
      } catch (error) {
        console.error('Error buscando Pokemon:', error);
      }
    }

    fetchPokemonAbilities();
  }, []);

  return (
    <div className="poke-container">
      {poke.map((p, index) => (
        <div key={index} className="poke-card">
          <p>Id: {p.id_pokemon}</p>
          <p>Nombre: {p.pokemon_name}</p>
          <p>{p.height}</p>
          <p>{p.weight}</p>
        </div>
      ))}
    </div>
  );
}
