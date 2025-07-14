import type { Dispatch } from 'redux';
import { getPokemonStats } from '../../services/pokemon.service';
import {
  SET_SELECTED_POKEMON_1,
  SET_SELECTED_POKEMON_2,
  RUN_COMPARISON,
  RUN_COMPARISON_FAILURE,
  RUN_COMPARISON_SUCCESS,
  RESET_COMPARISON,
} from './types';
import type { RootState } from '../reducers';
import type { AllPokemon } from '../../models/Pokemon';
import { addHistoryEntry } from '../pokemon-history/actions';

export const setSelectedPokemon1 = (pokemon: AllPokemon | null) => ({
  type: SET_SELECTED_POKEMON_1,
  payload: pokemon,
});

export const setSelectedPokemon2 = (pokemon: AllPokemon | null) => ({
  type: SET_SELECTED_POKEMON_2,
  payload: pokemon,
});

export const resetComparison = () => ({
  type: RESET_COMPARISON,
});

export const runComparison =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({ type: RUN_COMPARISON });
    const { selectedPokemon1, selectedPokemon2 } = getState().compare;

    if (!selectedPokemon1 || !selectedPokemon2) {
      return dispatch({
        type: RUN_COMPARISON_FAILURE,
        payload: 'Dua Pokémon harus dipilih',
      });
    }

    try {
      const [data1, data2] = await Promise.all([
        getPokemonStats(selectedPokemon1.name),
        getPokemonStats(selectedPokemon2.name),
      ]);

      let score1 = 0;
      let score2 = 0;
      data1.stats.forEach((s1) => {
        const s2 = data2.stats.find((s) => s.stat.name === s1.stat.name);
        if (s2) {
          if (s1.base_stat > s2.base_stat) score1++;
          else if (s2.base_stat > s1.base_stat) score2++;
        }
      });

      let finalResultP1: 'Win' | 'Lose' | 'Draw';
      let winnerMessage: string;

      if (score1 > score2) {
        winnerMessage = `${data1.name} wins!`;
        finalResultP1 = 'Win';
      } else if (score2 > score1) {
        winnerMessage = `${data2.name} wins!`;
        finalResultP1 = 'Lose';
      } else {
        winnerMessage = 'DRAW!';
        finalResultP1 = 'Draw';
      }

      dispatch({
        type: RUN_COMPARISON_SUCCESS,
        payload: { data1, data2, winnerMessage },
      });

      const newHistoryEntry = {
        id: new Date().toISOString(),
        p1: { name: data1.name, result: finalResultP1 },
        p2: {
          name: data2.name,
          result:
            finalResultP1 === 'Win'
              ? 'Lose'
              : finalResultP1 === 'Draw'
              ? 'Draw'
              : 'Win',
        },
      };
      dispatch(addHistoryEntry(newHistoryEntry));
    } catch (error: any) {
      dispatch({ type: RUN_COMPARISON_FAILURE, payload: error.message });
    }
  };
