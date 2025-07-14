import {
  SET_SELECTED_POKEMON_1,
  SET_SELECTED_POKEMON_2,
  RUN_COMPARISON,
  RUN_COMPARISON_FAILURE,
  RUN_COMPARISON_SUCCESS,
  RESET_COMPARISON,
  type CompareAction,
} from './types';
import type { CompareState } from '../../models/Comparison';

const initialState: CompareState = {
  selectedPokemon1: null,
  selectedPokemon2: null,
  pokemonData1: null,
  pokemonData2: null,
  winner: null,
  loading: false,
  error: null,
};

export const compareReducer = (
  state = initialState,
  action: CompareAction
): CompareState => {
  switch (action.type) {
    case SET_SELECTED_POKEMON_1:
      return { ...state, selectedPokemon1: action.payload };
    case SET_SELECTED_POKEMON_2:
      return { ...state, selectedPokemon2: action.payload };
    case RUN_COMPARISON:
      return {
        ...state,
        loading: true,
        error: null,
        winner: null,
        pokemonData1: null,
        pokemonData2: null,
      };
    case RUN_COMPARISON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonData1: action.payload.data1,
        pokemonData2: action.payload.data2,
        winner: action.payload.winnerMessage,
      };
    case RUN_COMPARISON_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case RESET_COMPARISON:
      return {
        ...initialState,
        loading: state.loading,
        error: state.error,
      };
    default:
      return state;
  }
};
