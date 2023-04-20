/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deletJokeStorage } from '../../redux/actions/jokeActions';
import Baza from '../marks_json';
import tagList from '../marksTop_Array';

const options = Baza();
const marka = [];
let model = [];

function BazaAvto() {
  const dispatch = useDispatch();
  const jokeStorage = useSelector(state => state.jokeStorage);
  const [value, setValue] = React.useState(marka[0]);
  const [value2, setValue2] = React.useState('выберите бренд');
  const [inputValue, setInputValue] = React.useState('');
  const [inputValue2, setInputValue2] = React.useState('');

  function getModel(brend) {
    // Object.keys(options).forEach((key) => { model.push(key); });
    model = options[brend];
    console.log('34', model);
  }
  function getMarka() {
    Object.keys(options).forEach(key => {
      marka.push(key);
    });
    console.log('27', marka);
    console.log('28', marka[0]);
  }

  const auto = Baza();

  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={9}
      component={Paper}
      sx={{
        backgroundColor: 'white',
      }}
      elevation={6}
      square
    >
      {console.log('Baza render')}
      {console.log('56', getMarka())}
      {console.log('57', tagList())}
      {/* {console.log(auto)} */}

      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 0,
        }}
      >
        <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>
        <br />
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: 0,
          }}
        >
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              getModel(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={marka}
            sx={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} label="Controllable" />
            )}
          />
          <Autocomplete
            value={value2}
            onChange={(event, newValue) => {
              setValue2(newValue);
            }}
            inputValue={inputValue2}
            onInputChange={(event, newInputValue) => {
              setInputValue2(newInputValue);
            }}
            id="controllable-states-demo"
            options={model}
            sx={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} label="Controllable" />
            )}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default BazaAvto;
