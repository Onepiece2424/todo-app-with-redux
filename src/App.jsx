import './App.css';
import React from "react"
import store from "./store/index"
import { connect } from "react-redux";

// 各コンポーネント
import Count from './components/Count';
import Post from './components/Post';

// Material-UI
import { Grid } from '@material-ui/core';
import Header from './components/Header';

function App() {

  return (
    <>
      <div>
      <Grid container direction="column">
        <Grid item container>
          <Grid item>
            <Header />
          </Grid>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            item2item2item2item2item2item2item2item2item2item2item2item2
            item2item2item2item2item2item2item2item2item2item2item2item2
            item2item2item2item2item2item2item2item2item2item2item2item2
            item2item2item2item2item2item2item2item2item2item2item2item2
            item2item2item2item2item2item2item2item2item2item2item2item2
          </Grid>
          <Grid sm={2} />
        </Grid>
      </Grid>
      </div>
      <br></br>
      <br></br>
      <h1>Redux Learn</h1>
      <p>Count:{store.getState().count}</p>
      <br></br>
      <Count />
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

// export default App;

export default connect(mapStateToProps, mapDispatchToProps)(App);
