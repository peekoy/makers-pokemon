import axios from 'axios';
import type {
  AllPokemon,
  AllPokemonResponse,
  PokemonStats,
} from '../models/Pokemon';

export const getAllPokemon = async (): Promise<AllPokemon[]> => {
  const cachedData = localStorage.getItem('allPokemonData');
  if (cachedData) {
    console.log('ambil data dari localstorage');
    return JSON.parse(cachedData);
  }

  console.log('localstorage kosong, fetch data dari api');
  try {
    const response = await axios.get<AllPokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon/?limit=1302&offset=0'
    );

    const pokemonList = response.data.results.map((pokemon) => ({
      name: pokemon.name,
    }));

    localStorage.setItem('allPokemonData', JSON.stringify(pokemonList));

    return pokemonList;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPokemonStats = async (name: string): Promise<PokemonStats> => {
  const response = await axios.get<PokemonStats>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  return response.data;
};
