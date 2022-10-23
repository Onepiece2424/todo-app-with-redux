import './App.css';
import React from "react"
import store from "./store/index"

// 各コンポーネント
import Greeting from './components/Greeting';
import Count from './components/Count';

function App() {

  return (
    <>
      <Greeting />
      <h1>Redux Learn</h1>
      <p>Count:{store.getState().count}</p>
      <Count />
    </>
  );
}

export default App;
