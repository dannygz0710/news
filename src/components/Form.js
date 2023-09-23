import React from "react";
import useSelect from "../hooks/useSelect";
import Button from "@material-ui/core/Button";
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

const Form = ({ setCategory }) => {
  const options = [
    { value: "general", label: "General" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];

  const [state, SelectNews] = useSelect(options);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCategory(state);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12} sm={12} md={12} >

          <Grid item xs={12} className={classes.space}>
            <SelectNews />
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
            Search
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
