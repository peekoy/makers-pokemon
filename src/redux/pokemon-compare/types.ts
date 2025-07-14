import type { ComparisonSuccessPayload } from '../../models/Comparison';
import type { AllPokemon } from '../../models/Pokemon';

export const SET_SELECTED_POKEMON_1 = 'SET_SELECTED_POKEMON_1';
export const SET_SELECTED_POKEMON_2 = 'SET_SELECTED_POKEMON_2';
export const RUN_COMPARISON = 'RUN_COMPARISON';
export const RUN_COMPARISON_SUCCESS = 'RUN_COMPARISON_SUCCESS';
export const RUN_COMPARISON_FAILURE = 'RUN_COMPARISON_FAILURE';
export const RESET_COMPARISON = 'RESET_COMPARISON';

export interface SetSelectedPokemon1Action {
  type: typeof SET_SELECTED_POKEMON_1;
  payload: AllPokemon | null;
}

export interface SetSelectedPokemon2Action {
  type: typeof SET_SELECTED_POKEMON_2;
  payload: AllPokemon | null;
}

export interface RunComparisonAction {
  type: typeof RUN_COMPARISON;
}

export interface RunComparisonSuccessAction {
  type: typeof RUN_COMPARISON_SUCCESS;
  payload: ComparisonSuccessPayload;
}

export interface RunComparisonFailureAction {
  type: typeof RUN_COMPARISON_FAILURE;
  payload: string;
}

export interface ResetComparisonAction {
  type: typeof RESET_COMPARISON;
}

export type CompareAction =
  | SetSelectedPokemon1Action
  | SetSelectedPokemon2Action
  | RunComparisonAction
  | RunComparisonSuccessAction
  | RunComparisonFailureAction
  | ResetComparisonAction;
