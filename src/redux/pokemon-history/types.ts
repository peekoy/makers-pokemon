import type { HistoryEntry } from '../../models/History';

export const LOAD_HISTORY = 'LOAD_HISTORY';
export const ADD_HISTORY_ENTRY = 'ADD_HISTORY_ENTRY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

export interface LoadHistoryAction {
  type: typeof LOAD_HISTORY;
  payload: HistoryEntry[];
}
export interface AddHistoryAction {
  type: typeof ADD_HISTORY_ENTRY;
  payload: HistoryEntry;
}
export interface ClearHistoryAction {
  type: typeof CLEAR_HISTORY;
}

export type HistoryAction =
  | LoadHistoryAction
  | AddHistoryAction
  | ClearHistoryAction;
