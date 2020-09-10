import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Mission from './Mission';
import Solution from './Solution';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button, AppBar, Typography, makeStyles, Grid, createMuiTheme, ThemeProvider, CssBaseline, Avatar } from '@material-ui/core';
import { theme } from './theme'

const useStyles = makeStyles({
  typographyStyle: {
    color: "blue"
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
})

function App() {
  return (
    <Router>
      <div className="App">
        <div className="banner">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/mission" component={Mission} />
            <Route path="/solution" component={Solution} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <React.Fragment>
  <ThemeProvider theme={theme}>
  <CssBaseline />
    <div>
      <div className="cover">
        <div className="cover-text">
          <Typography className="cover-title">The air can be mysterious yet, dangerous</Typography>
          <p className="cover-subTitle">Team Pandemeecs is taking action by creating a technology that takes care your favorite city</p>
        </div>
      </div>
      <div className="second">
        <div className="second-text">
          <div>
            <Typography variant="h5" className="content-top">What's the matter?</Typography>
            <Typography variant="h1" className="content-mid">Air pollution kills people!</Typography>
            <Typography><p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro corrupti eos inventore harum. Consectetur corporis quasi alias, in aspernatur, laudantium cupiditate neque cumque suscipit commodi enim voluptate fuga culpa inventore.</p></Typography>
            <Button variant="outlined" color="secondary" size="large">Learn more</Button>
          </div>
        </div>
        <div className="second-image">
          <img src={require('./backgrounds/problem3.jpg')} alt="problem"/>
        </div>
      </div>
      <div className="section third">
        <div className="third-upper">
          <Typography variant="h5" className="content-top">We have these,</Typography>
          <Typography variant="h1" className="content-mid">but not Enough!</Typography>
        </div>
        <div className="third-lower">
          <div><Avatar className="margin-auto" alt="sample" src={require('./pics/aclima.png')} style={{width: "250px", height: "250px"}}/></div>
          <div><Avatar className="margin-auto" alt="sample" src={require('./pics/breezometer.png')} style={{width: "250px", height: "250px"}}/></div>
          <div><Avatar className="margin-auto" alt="sample" src={require('./pics/plume.png')} style={{width: "250px", height: "250px"}}/></div>
        </div>
      </div>
    </div>
  </ThemeProvider>
  </React.Fragment>
  
  
);

export default App;
