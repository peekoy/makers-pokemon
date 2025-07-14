export interface AllPokemon {
  name: string;
}

export interface AllPokemonResponse {
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonStats {
  name: string;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
