import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useSelect = (opciones) => {
  //state inicial
  const [state, actualizarState] = useState('');
  const SelectNoticias = () => (
    <FormControl variant="filled" fullWidth>
      <InputLabel htmlFor="filled-age-native-simple">Seleccione Categoria</InputLabel>
      <Select
        onChange={e => actualizarState(e.target.value)}
        value={state}
      >
        {opciones.map(opcion => (
          <MenuItem key={opcion.value} value={opcion.value}>{opcion.label}</MenuItem>
        ))}
      </Select>
    </FormControl>

  )
  return [state, SelectNoticias];

}

export default useSelect;