import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { Dispatch } from 'redux';
import { Box, Typography } from '@mui/material';
import { fetchAllPokemon } from '../redux/pokemon-data/actions';
import { loadHistory, clearHistory } from '../redux/pokemon-history/actions';
import {
  runComparison,
  setSelectedPokemon1,
  setSelectedPokemon2,
  resetComparison,
} from '../redux/pokemon-compare/actions';
import type { RootState } from '../redux/reducers';
import type { AllPokemon } from '../models/Pokemon';
import { ComparisonControls } from './ComparisonControls';
import { ComparisonResult } from './ComparisonResult';
import { HistoryCard } from './History';

const PokemonComparison = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { allPokemon } = useSelector((state: RootState) => state.data);
  const { entries: history } = useSelector((state: RootState) => state.history);
  const {
    selectedPokemon1,
    selectedPokemon2,
    pokemonData1,
    pokemonData2,
    winner,
    loading: compareLoading,
    error,
  } = useSelector((state: RootState) => state.compare);

  useEffect(() => {
    dispatch(fetchAllPokemon());
    dispatch(loadHistory());
  }, [dispatch]);

  return (
    <Box sx={{ padding: 3, maxWidth: 900, margin: 'auto' }}>
      <Typography
        variant='h4'
        component='h1'
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        Bandingkan Pokemon
      </Typography>

      {error && (
        <Typography color='error' sx={{ textAlign: 'center', mb: 2 }}>
          {error}
        </Typography>
      )}

      <ComparisonControls
        allPokemon={allPokemon}
        selectedPokemon1={selectedPokemon1}
        selectedPokemon2={selectedPokemon2}
        onPokemonChange1={(value: AllPokemon | null) =>
          dispatch(setSelectedPokemon1(value))
        }
        onPokemonChange2={(value: AllPokemon | null) =>
          dispatch(setSelectedPokemon2(value))
        }
        onCompare={() => dispatch(runComparison())}
        onReset={() => dispatch(resetComparison())}
        loading={compareLoading}
      />

      <ComparisonResult
        loading={compareLoading}
        pokemonData1={pokemonData1}
        pokemonData2={pokemonData2}
        winner={winner}
      />

      <HistoryCard
        history={history}
        onClearHistory={() => dispatch(clearHistory())}
      />
    </Box>
  );
};

export default PokemonComparison;
