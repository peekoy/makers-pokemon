export interface HistoryEntry {
  id: string;
  p1: { name: string; result: 'Win' | 'Lose' | 'Draw' };
  p2: { name: string; result: string };
}

export interface HistoryState {
  entries: HistoryEntry[];
}

export interface HistoryProps {
  history: HistoryEntry[];
  onClearHistory: () => void;
}
