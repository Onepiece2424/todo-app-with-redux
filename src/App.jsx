import './App.css';
import React from "react"
import store from "./store/index"
import { connect } from "react-redux";

// 各コンポーネント
// import Greeting from './components/Greeting';
// import Count from './components/Count';

function App({ count, increase, decrease }) {

  // const increase = () => {
  //   dispatch({ type: "INCREASE_COUNT"});
  // };

  // const decrease = () => {
  //   dispatch({ type: "DECREASE_COUNT"});
  // };

  return (
    <>
      <h1>Redux Learn</h1>
      <p>Count:{store.getState().count}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
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
