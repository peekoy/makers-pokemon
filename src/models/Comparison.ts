import type { AllPokemon, PokemonStats } from './Pokemon';

export interface DataState {
  allPokemon: AllPokemon[];
  loading: boolean;
  error: string | null;
}

export interface CompareState {
  selectedPokemon1: AllPokemon | null;
  selectedPokemon2: AllPokemon | null;
  pokemonData1: PokemonStats | null;
  pokemonData2: PokemonStats | null;
  winner: string | null;
  loading: boolean;
  error: string | null;
}

export interface ComparisonSuccessPayload {
  data1: PokemonStats;
  data2: PokemonStats;
  winnerMessage: string;
}

export interface ComparisonControlsProps {
  allPokemon: AllPokemon[];
  selectedPokemon1: AllPokemon | null;
  selectedPokemon2: AllPokemon | null;
  onPokemonChange1: (value: AllPokemon | null) => void;
  onPokemonChange2: (value: AllPokemon | null) => void;
  onCompare: () => void;
  onReset: () => void;
  loading: boolean;
}

export interface ComparisonResultProps {
  loading: boolean;
  pokemonData1: PokemonStats | null;
  pokemonData2: PokemonStats | null;
  winner: string | null;
}
