import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface ApiData {
  pokedexId: number;
  name: string;
  height: number;
  weight: number;
  spriteUrl: string;
}

export const PokemonInfo = () => {
  const [info, setInfo] = useState<ApiData>();

  const { pokedexId } = useParams();

  useEffect(() => {
    const fetchPokemonData = async (pokedexId: number) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokedexId}`
      );
      const { id, name, height, weight, sprites } = await response.json();
      setInfo({
        pokedexId: id,
        name,
        height,
        weight,
        spriteUrl: sprites.front_default,
      } as ApiData);
    };
    fetchPokemonData(Number(pokedexId));
  }, [pokedexId]);

  return (
    <div>
      {info ? (
        <>
          <h1>{info.name}</h1>
          <h2>{`#${info.pokedexId}`}</h2>
          <img src={info.spriteUrl} alt={info.name} />
          <p>
            Height: {info.height} , Weight: {info.weight}
          </p>
        </>
      ) : (
        <h1>...</h1>
      )}
    </div>
  );
};
