import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(() => ({
    root: {
        padding: '20px',
        
    },
    Typography: {
     margin: 'auto',
    }

}));

const Header = () => {
    const classes = useStyles();

    return (
        
            <AppBar  position="static" >
                <Toolbar className={classes.root}>
                    <Typography variant="h3" className={classes.Typography} >
                        News Search
          </Typography>
                </Toolbar>
            </AppBar>
    
    );
}

export default Header;