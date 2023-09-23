import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useSelect = (opciones) => {
  
  const [state, setState] = useState('');
  const SelectNews = () => (
    <FormControl variant="standard" fullWidth>
      <InputLabel htmlFor="filled-age-native-simple">Select a Category</InputLabel>
      <Select
        onChange={e => setState(e.target.value)}
        value={state}
      >
        {opciones.map(opcion => (
          <MenuItem key={opcion.value} value={opcion.value}>{opcion.label}</MenuItem>
        ))}
      </Select>
    </FormControl>

  )
  return [state, SelectNews];

}

export default useSelect;