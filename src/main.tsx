import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PokemonComparison from './components/PokemonComparison';
import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PokemonComparison />
    </Provider>
  </StrictMode>
);
