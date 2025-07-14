import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import type { PokemonStats } from '../models/Pokemon';

const ComparisonTable = ({
  data1,
  data2,
}: {
  data1: PokemonStats;
  data2: PokemonStats;
}) => {
  const statNames = data1.stats.map((statInfo) => statInfo.stat.name);
  const statsMap1 = Object.fromEntries(
    data1.stats.map((s) => [s.stat.name, s.base_stat])
  );
  const statsMap2 = Object.fromEntries(
    data2.stats.map((s) => [s.stat.name, s.base_stat])
  );

  return (
    <TableContainer component={Paper}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Stat</TableCell>
            <TableCell
              align='center'
              sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
            >
              {data1.name}
            </TableCell>
            <TableCell
              align='center'
              sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
            >
              {data2.name}
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statNames.map((name: string) => {
            let resultText = '';
            let resultColor = 'inherit';
            if (statsMap1[name] > statsMap2[name]) {
              resultText = `${data1.name} win`;
              resultColor = 'green';
            } else if (statsMap2[name] > statsMap1[name]) {
              resultText = `${data2.name} win`;
              resultColor = 'green';
            } else {
              resultText = 'Draw';
              resultColor = 'orange';
            }

            return (
              <TableRow key={name}>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
                >
                  {name.replace('-', ' ')}
                </TableCell>
                <TableCell
                  align='center'
                  sx={{
                    color:
                      statsMap1[name] > statsMap2[name] ? 'green' : 'inherit',
                  }}
                >
                  {statsMap1[name]}
                </TableCell>
                <TableCell
                  align='center'
                  sx={{
                    color:
                      statsMap2[name] > statsMap1[name] ? 'green' : 'inherit',
                  }}
                >
                  {statsMap2[name]}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 'bold',
                    color: resultColor,
                    textTransform: 'capitalize',
                  }}
                >
                  {resultText}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComparisonTable;
