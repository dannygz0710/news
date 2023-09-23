import React from 'react';
import PropTypes from 'prop-types';
import News from './News';
import Grid from '@material-ui/core/Grid';




const List = ({ news }) => {
 
  return (
    <Grid
      container
      direction="row"
      spacing={3}
    >
      {news.map((item, index) => (
        <News
          key={index}
          item={item}
        />
      ))}
    </Grid>
  );
}

List.propTypes = {
  news: PropTypes.array.isRequired
}



export default List;

