import { Box, Typography, CircularProgress } from '@mui/material';
import type { ComparisonResultProps } from '../models/Comparison';
import ComparisonTable from './ComparisonTable';

export const ComparisonResult = ({
  loading,
  pokemonData1,
  pokemonData2,
  winner,
}: ComparisonResultProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '200px',
        alignItems: 'center',
        marginY: 4,
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : pokemonData1 && pokemonData2 ? (
        <Box sx={{ width: '100%' }}>
          <ComparisonTable data1={pokemonData1} data2={pokemonData2} />
          {winner && (
            <Typography
              variant='h5'
              sx={{ textAlign: 'center', marginY: 2, fontWeight: 'bold' }}
            >
              {winner}
            </Typography>
          )}
        </Box>
      ) : (
        <Typography color='text.secondary' sx={{ textAlign: 'center' }}>
          Pilih 2 Pokemon dan klik 'Compare'
        </Typography>
      )}
    </Box>
  );
};
