import { Grid, Button, Autocomplete, TextField } from '@mui/material';
import type { ComparisonControlsProps } from '../models/Comparison';

export const ComparisonControls = ({
  allPokemon,
  selectedPokemon1,
  selectedPokemon2,
  onPokemonChange1,
  onPokemonChange2,
  onCompare,
  onReset,
  loading,
}: ComparisonControlsProps) => {
  return (
    <Grid container spacing={2} alignItems='center' sx={{ marginBottom: 4 }}>
      <Grid sx={{ xs: 12, md: 4, width: 250 }}>
        <Autocomplete
          options={allPokemon}
          getOptionLabel={(option) => option.name}
          value={selectedPokemon1}
          onChange={(event, newValue) => onPokemonChange1(newValue)}
          renderInput={(params) => (
            <TextField {...params} label='Pilih Pokemon 1' />
          )}
        />
      </Grid>
      <Grid sx={{ xs: 12, md: 4, width: 250 }}>
        <Autocomplete
          options={allPokemon}
          getOptionLabel={(option) => option.name}
          value={selectedPokemon2}
          onChange={(event, newValue) => onPokemonChange2(newValue)}
          renderInput={(params) => (
            <TextField {...params} label='Pilih Pokemon 2' />
          )}
        />
      </Grid>
      <Grid sx={{ display: 'flex', gap: 1, xs: 12, md: 4 }}>
        <Button
          variant='contained'
          color='success'
          onClick={onCompare}
          disabled={!selectedPokemon1 || !selectedPokemon2 || loading}
          fullWidth
        >
          Compare
        </Button>
        <Button variant='contained' color='inherit' onClick={onReset} fullWidth>
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};
