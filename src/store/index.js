import { createStore } from "redux";

const initialState = {
  count: 1,
};
console.log(initialState)
const reducer = (state = initialState) => {
  return state;

};

const store = createStore(reducer);

export default store;
