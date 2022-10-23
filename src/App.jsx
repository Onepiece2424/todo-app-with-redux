import './App.css';
import React from "react"
import store from "./store/index"

import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <Greeting />
      <h1>Redux Learn</h1>
      <p>Count:{store.getState().count}</p>
    </>
  );
}

export default App;
