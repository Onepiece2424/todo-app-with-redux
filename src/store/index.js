import { createStore } from "redux";

const initialState = {
  count: 50,
  posts: [
    { id: 1, title: "Reduxについて" },
    {
      id: 2,
      title: "ReduxのHooksについて",
    },
  ],
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
