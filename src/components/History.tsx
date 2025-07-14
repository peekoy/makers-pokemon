import {
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import type { HistoryProps } from '../models/History';

export const HistoryCard = ({ history, onClearHistory }: HistoryProps) => {
  return (
    <Box>
      <Divider sx={{ marginY: 4 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant='h5'>History</Typography>
        <Button
          variant='outlined'
          color='error'
          size='small'
          onClick={onClearHistory}
          disabled={history.length === 0}
        >
          Reset History
        </Button>
      </Box>
      <Paper sx={{ maxHeight: 200, overflow: 'auto', marginTop: 2 }}>
        <List dense>
          {history.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemText
                primary={
                  <Typography
                    component='span'
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {item.p1.name}{' '}
                    <Typography
                      component='span'
                      sx={{
                        fontWeight: 'bold',
                        color:
                          item.p1.result === 'Win'
                            ? 'green'
                            : item.p1.result === 'Lose'
                            ? 'red'
                            : 'inherit',
                      }}
                    >
                      ({item.p1.result})
                    </Typography>{' '}
                    vs {item.p2.name}{' '}
                    <Typography
                      component='span'
                      sx={{
                        fontWeight: 'bold',
                        color:
                          item.p2.result === 'Win'
                            ? 'green'
                            : item.p2.result === 'Lose'
                            ? 'red'
                            : 'inherit',
                      }}
                    >
                      ({item.p2.result})
                    </Typography>
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};
