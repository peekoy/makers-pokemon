import { combineReducers } from 'redux';
import { dataReducer } from '../pokemon-data/reducer';
import { compareReducer } from '../pokemon-compare/reducer';
import { historyReducer } from '../pokemon-history/reducer';

export const rootReducer = combineReducers({
  data: dataReducer,
  compare: compareReducer,
  history: historyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
