import { LOAD_HISTORY, ADD_HISTORY_ENTRY, CLEAR_HISTORY } from './types';
import type { HistoryEntry } from '../../models/History';

export const loadHistory = () => {
  const savedHistory = localStorage.getItem('pokemonComparisonHistory');
  const payload = savedHistory ? JSON.parse(savedHistory) : [];
  return { type: LOAD_HISTORY, payload };
};

export const addHistoryEntry = (entry: HistoryEntry) => ({
  type: ADD_HISTORY_ENTRY,
  payload: entry,
});

export const clearHistory = () => ({
  type: CLEAR_HISTORY,
});
