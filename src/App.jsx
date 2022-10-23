import './App.css';
import React from "react"
import store from "./store/index"
import { connect } from "react-redux";

// 各コンポーネント
import Count from './components/Count';
import Post from './components/Post';

function App({ count, increase, decrease }) {

  return (
    <>
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
