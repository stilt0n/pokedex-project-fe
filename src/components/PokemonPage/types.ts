export interface PokemonProps {
  pokedexId: number;
  name: string;
  types: readonly PokemonType[];
  height?: number;
  weight?: number;
  spriteUrl?: string;
  className?: string;
  id?: string;
}

export type PokemonType =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy'
  // These are not official types but technically exist in some capacity
  | 'bird' // can apply to glitch pokemon such as MissingNo.
  | '???' // type of `curse`
  | 'shadow'; // present in some games

export type NonStandardPokemonType = 'bird' | '???' | 'shadow';
