import {
  FETCH_ALL_POKEMON,
  FETCH_ALL_POKEMON_FAILURE,
  FETCH_ALL_POKEMON_SUCCESS,
  type DataAction,
} from './types';
import type { DataState } from '../../models/Comparison';

const initialState: DataState = {
  allPokemon: [],
  loading: false,
  error: null,
};

export const dataReducer = (
  state = initialState,
  action: DataAction
): DataState => {
  switch (action.type) {
    case FETCH_ALL_POKEMON:
      return { ...state, loading: true, error: null };

    case FETCH_ALL_POKEMON_SUCCESS:
      return { ...state, loading: false, allPokemon: action.payload };

    case FETCH_ALL_POKEMON_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
