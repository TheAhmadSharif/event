import * as React from 'react';
import './App.css';
import { Container, Typography, Box, Slider, Card, Grid, Paper, Stack, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Input = styled(MuiInput)`
  width: 42px;
`;
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

  const handleInputChange = (event, index) => {
    setValue(event.target.value);
    console.log(event, '43');
  };
  
  let items = ['Mon:', 'Tue:', 'Wed:', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className="App">
      <Container>
        <Typography variant="h5" component="h5" sx={{ m: 4 }}>
          I'M WEEKLY AVAILABLE AT
        </Typography>
        <Grid display="flex" alignItems="center" justify="center" 
          justifyContent="center">
          <Stack direction="row" spacing={1} justify="center">
            {items.map((item, index) => {
              return <Item key={index}>
                <Typography id="non-linear-slider" gutterBottom>
                  {item} :
                </Typography>
                { value }
                <Box sx={{ height: 300, width: 100 }}>
                  <Slider
                    sx={{
                      '& input[type="range"]': {
                        WebkitAppearance: 'slider-vertical',
                      },
                    }}
                    onClick={(event) => handleInputChange(event, index)}
                    getAriaLabel={() => 'Time'}
                    orientation="vertical"
                    defaultValue={[9, 12]}
                    min={8}
                    max={20}
                    disabled={false}
                    getAriaLabel={() => 'Day Time'}
                    marks={marks}
                  />
               
                  <Checkbox defaultChecked onClick={() => handleInputChange(index)} />
                </Box>
              </Item>
            })}
           
          </Stack>

         
         
        </Grid>
        <Grid sx={{ m: 8 }}>
          <div display="flex" alignitems="center" justify="center" 
          justifycontent="center">
            Author Ahmad Sharif
            </div>

          </Grid>
      </Container>
    </div>
  );
}
export default App;
