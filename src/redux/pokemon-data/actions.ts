import type { Dispatch } from 'redux';
import { getAllPokemon } from '../../services/pokemon.service';
import {
  FETCH_ALL_POKEMON,
  FETCH_ALL_POKEMON_FAILURE,
  FETCH_ALL_POKEMON_SUCCESS,
} from './types';

export const fetchAllPokemon = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_ALL_POKEMON });
  try {
    const response = await getAllPokemon();
    dispatch({ type: FETCH_ALL_POKEMON_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({ type: FETCH_ALL_POKEMON_FAILURE, payload: error.message });
  }
};
