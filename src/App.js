import * as React from 'react';
import './App.css';
import { Container, Button, Typography, Box, Slider, Card, Grid, Paper, Stack, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function valuetext(value) {
  return `${value}°C`;
}
const marks = [
  {
    value: 8,
    label: '8:00',
  },
  {
    value: 12,
    label: '10:00',
  },
  {
    value: 16,
    label: '16:00',
  },
  {
    value: 20,
    label: '20:00',
  },
];
function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [value, setValue] = React.useState([8, 12]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
  let items = ['Mon:', 'Tue:', 'Wed:', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className="App">
      <Container>
        <Typography variant="h5" component="h5" sx={{ m: 4 }}>
          I'M WEEKLY AVAILABLE AT
        </Typography>
        <Grid container alignItems="center" justify="center" display="flex"
          justifyContent="center"
          alignItems="center">
          <Stack direction="row" spacing={1} justify="center">
            {items.map((item, index) => {
              return <Item>
                <Typography id="non-linear-slider" gutterBottom>
                  {item} :
                </Typography>
                <Box sx={{ height: 300, width: 100 }}>
                  <Slider
                    sx={{
                      '& input[type="range"]': {
                        WebkitAppearance: 'slider-vertical',
                      },
                    }}
                    getAriaLabel={() => 'Time'}
                    orientation="vertical"
                    defaultValue={[9, 12]}
                    min={8}
                    max={20}
                    disabled={false}
                    getAriaLabel={() => 'Day Time'}
                    onClick={(event, newValue) =>
                      setValue(newValue)
                    }
                    marks={marks}
                  />
                  <Checkbox defaultChecked onChange={handleInputChange} />
                </Box>
              </Item>
            })}
          </Stack>
        </Grid>
      </Container>
    </div>
  );
}
export default App;
