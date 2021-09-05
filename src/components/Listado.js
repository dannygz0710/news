import React from 'react';
import PropTypes from 'prop-types';
import Noticia from './Noticia';
import Grid from '@material-ui/core/Grid';



const Listado = ({ noticias }) => {
  return (
    <Grid
      container
      direction="row"
      spacing={3}
    >
      {noticias.map(noticia => (
        <Noticia
          key={noticia.url}
          noticia={noticia}
        />
      ))}
    </Grid>
  );
}

Listado.propTypes = {
  noticias: PropTypes.array.isRequired
}



export default Listado;

