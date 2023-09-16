import { useEffect, useState } from 'react';
import { Pokemon } from './__internal__/Pokemon';
import { PokemonProps } from './types';

export const PokemonPage = () => {
  const [pokemonData, setPokemonData] = useState<PokemonProps[]>([]);

  useEffect(() => {
    const loadPokemonData = async () => {
      try {
        const response = await fetch('http://localhost:8080/pokemon', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setPokemonData(data);
      } catch (e) {
        console.error((e as Error)?.message ?? String(e));
      }
    };
    loadPokemonData();
  }, []);

  return (
    <div>
      {pokemonData.map(({ pokedexId, name, spriteUrl }) => (
        <Pokemon
          key={pokedexId}
          pokedexId={pokedexId}
          name={name}
          spriteUrl={spriteUrl}
        />
      ))}
    </div>
  );
};
