import type { AllPokemon } from '../../models/Pokemon';

export const FETCH_ALL_POKEMON = 'FETCH_ALL_POKEMON';
export const FETCH_ALL_POKEMON_SUCCESS = 'FETCH_ALL_POKEMON_SUCCESS';
export const FETCH_ALL_POKEMON_FAILURE = 'FETCH_ALL_POKEMON_FAILURE';

export interface FetchStartAction {
  type: typeof FETCH_ALL_POKEMON;
}

export interface FetchSuccessAction {
  type: typeof FETCH_ALL_POKEMON_SUCCESS;
  payload: AllPokemon[];
}

export interface FetchFailureAction {
  type: typeof FETCH_ALL_POKEMON_FAILURE;
  payload: string;
}

export type DataAction =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailureAction;
