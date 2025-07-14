import { legacy_createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
