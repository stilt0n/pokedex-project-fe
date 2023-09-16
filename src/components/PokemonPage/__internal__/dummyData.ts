import { PokemonProps } from '../types';

export const dummyData: PokemonProps[] = [
  {
    pokedexId: 2,
    name: 'Ivysaur',
    types: ['grass', 'poison'],
    height: 10,
    weight: 130,
    spriteUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    pokedexId: 25,
    name: 'Pikachu',
    types: ['electric'],
    spriteUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
];
