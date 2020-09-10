import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Grid, useScrollTrigger, Slide, Typography, ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

function HideOnScroll(props) {
    const {children, window} = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });

    // return (
    //     <Slide appear={false} direction="down" in={trigger}>
    //         {children}
    //     </Slide>
    // );

    return React.cloneElement(children, {
        style: {
            backgroundColor: trigger ? "#347474" : "transparent",
            color: trigger ? "white" : "black",
            transition: trigger ? ".3s" : "0.5s",
            boxShadow: "none",
            padding: "10px 0px"
        }
    });
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired
};

function Nav(props) {
  return (
    <HideOnScroll {...props}>
            <AppBar>
                <ThemeProvider theme={theme}>
                    <Toolbar>
                        <Grid item xs={5} justify="flex-start">
                                <Link className="nav-link" to="/">
                                    <h2 className="logo">Airwayze</h2>
                                </Link>
                        </Grid>
                        <Grid container direction="row" spacing={8} justify="flex-end">

                            <Grid item>
                                <Link className="nav-link" to="/about">
                                    <Typography><h3 className="nav-text">About</h3></Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link className="nav-link" to="/mission">
                                    <Typography><h3 className="nav-text">Mission</h3></Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link className="nav-link" to="/solution">
                                    <Typography><h3 className="nav-text">Solution</h3></Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </ThemeProvider>
            </AppBar>
    </HideOnScroll>
  );
}

export default Nav;