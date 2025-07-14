import {
  ADD_HISTORY_ENTRY,
  CLEAR_HISTORY,
  LOAD_HISTORY,
  type HistoryAction,
} from './types';
import type { HistoryState } from '../../models/History';

const initialState: HistoryState = {
  entries: [],
};

export const historyReducer = (
  state = initialState,
  action: HistoryAction
): HistoryState => {
  switch (action.type) {
    case LOAD_HISTORY:
      return { ...state, entries: action.payload };
    case ADD_HISTORY_ENTRY:
      const newEntries = [action.payload, ...state.entries];
      localStorage.setItem(
        'pokemonComparisonHistory',
        JSON.stringify(newEntries)
      );
      return { ...state, entries: newEntries };
    case CLEAR_HISTORY:
      localStorage.removeItem('pokemonComparisonHistory');
      return { ...state, entries: [] };
    default:
      return state;
  }
};
