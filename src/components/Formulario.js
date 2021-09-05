import React from "react";
import useSelect from "../hooks/useSelect";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px",
    textAlign: "center",
  },
  space: {
    marginBottom: "25px",
    color: grey[800],
  },
}));

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];

  const [categoria, SelectNoticias] = useSelect(OPCIONES);

  const handleSubmit = (e) => {
    e.preventDefault();

    guardarCategoria(categoria);
  };

  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.space}>
            Encuentra Noticias Por Categoria
          </Typography>
          <Grid item xs={12} className={classes.space}>
            <SelectNoticias />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            startIcon={<Search />}
          >
            Buscar
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default Formulario;
