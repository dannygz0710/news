import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Listado from './components/Listado'
import Container from '@material-ui/core/Container';


function App() {

  // definir la categoria
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);
  console.log(categoria)

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=34466eddc4cb4dbfbc0627342cee27a4`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    
    }
    consultarApi();

  }, [categoria]);

  return (
    <Fragment>
      <Header />
      <Container fixed>
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <Listado
          noticias={noticias}
        />
      </Container>

    </Fragment>
  );
}

export default App;
