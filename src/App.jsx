import './App.css';
import React from "react"
// import store from "./store/index"
import { connect } from "react-redux";

// 各コンポーネント
// import Count from './components/Count';
import Post from './components/Post';
import SetTimeOut from './components/SetTimeOut';
import EvenNumber from './components/EvenNumber';

// Material-UI
import { Grid } from '@material-ui/core';
import Header from './components/Header';

import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => ({
  container: {
    position: "static",
    padding: "5px",
    width: "100%"
  }
}));

function App() {

  const classes = useStyles();

  return (
    <>
      <Grid container direction="column">
        <Grid item container>
          <Grid item  className={classes.container}>
            <Header />
          </Grid>
          <br></br>
          <br></br>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            item2item2item2item2item2item2item2item2item2item2item2item2
            item2item2item2item2item2item2item2item2item2item2item2item2
          </Grid>
          <Grid sm={2} />
          <div>
            <br></br>
            <SetTimeOut />
            <br></br>
          </div>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <EvenNumber />
      <br></br>
      <br></br>
      <Post />
    </>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREASE_COUNT" }),
    decrease: () => dispatch({ type: "DECREASE_COUNT" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
