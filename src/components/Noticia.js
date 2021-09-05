import React from "react";
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AddCircle from "@material-ui/icons/AddCircle";



const Noticia = ({ noticia }) => {

  const { urlToImage, url, title, description } = noticia;

  const Imagen = (urlToImage) ? 
  <CardMedia
            component="img"
            alt={title}
            height="300"
            image={urlToImage}
          />
          : null;

  return (
    <Grid item xs={12} sm={4}>
      <CardActionArea href={url}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
          </CardContent>
          {Imagen}
          <CardContent>
            <Typography gutterBottom variant="body2" component="h2">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={url}
              startIcon={<AddCircle />}
            >
              Ver Noticia
            </Button>
          </CardActions>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
}

export default Noticia;
