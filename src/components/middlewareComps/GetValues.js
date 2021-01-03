import React, { useState } from 'react'
import BinaryToFunctions from '../converterFunctions/BinaryToFunctions'
import DecimalToFunctions from '../converterFunctions/DecimalToFunctions'
import OctalToFunctions from '../converterFunctions/OctalToFunctions'
import HexadecimalToFunctions from '../converterFunctions/HexadecimalToFunctions'
import Converter from '../Converter'
import { Box, Typography, Grid, Toolbar, Button } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const GetValues = () => {
    const classes = useStyles();
    let initialValue = 0
    const [state, setState] = useState({ choice: '', value: initialValue })

    const formInput = (choice, value) => {

        setState({
            ...state,
            choice: choice,
            value: value,
        })


    }

    let cond = ''
    switch (state.choice) {
        case "hexadecimal":
            cond = <HexadecimalToFunctions value={state.value} />
            break;
        case "binary":
            cond = <BinaryToFunctions value={state.value} />
            break;
        case "octal":
            cond = <OctalToFunctions value={state.value} />
            break;
        default:
            cond = <DecimalToFunctions value={state.value} />
    }




    return (
        <React.Fragment>

            <div className={classes.root}>
                <AppBar color="inherit" position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            SimpleNumber Converter
                        </Typography>
                        <Button color="inherit">Github</Button>
                    </Toolbar>
                </AppBar>
            </div>

            <Grid container sm={12} spacing={2} >
                <Grid item sm={2}></Grid>
                <Grid item xs={12} sm={8} justify="center">
                    <Box m={4} p={4} style={{ boxShadow: "0 2px 7px rgba(0, 0, 0, 0.23)" }}>
                        {cond}
                        <Converter formInput={formInput} />
                    </Box>
                </Grid>
                <Grid item sm={2}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <Box p={2} align="center">
                        <Typography variant="h6" color="textSecondary">
                            Designed with react and materialUI
                    </Typography>
                        <Typography variant="subtitle">
                            Easy and fun to use
                    </Typography>
                        <Typography variant="subtitle2">
                            &copy; copyright <Typography variant="span" color="secondary">MiiT</Typography>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>

    )
}

export default GetValues
