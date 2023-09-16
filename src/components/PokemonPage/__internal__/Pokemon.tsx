import { Link } from 'react-router-dom';
import { PokemonProps } from '../types';

export const Pokemon = (
  props: Pick<PokemonProps, 'name' | 'pokedexId' | 'spriteUrl'>
) => (
  <Link
    to={`/pokemon/${props.pokedexId}`}
    title={`#${props.pokedexId}: ${props.name}`}
  >
    <img src={props.spriteUrl} alt={`picture of ${props.name}`} />
    <p>{props.name}</p>
    <p>{props.pokedexId}</p>
  </Link>
);
