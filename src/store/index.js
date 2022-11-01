import { createStore } from "redux";

const initialState = {
  posts: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POST_DATA':
    return { ...state, posts: action.payload };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
