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

// const reducer = (state = initialState) => {
//   return state;
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: state.count + 1,
      };
      case 'DECREASE_COUNT':
        return {
          count: state.count - 1,
        };
        default:
          return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const countReducer = (
//   state = {
//     count: 60,
//   }
// ) => {
//   return state;
// };

// const postsReducer = (
//   state = {
//     posts: [
//       {id: 1, title: 'Reduxについて'},
//       {
//         id: 2,
//         title: 'ReduxのHooksについて',
//       },
//     ],
//   }
// ) => {
//   return state;
// }

// const rootReducer = combineReducers({
//   countReducer,
//   postsReducer,
// })

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
console.log(store.getState())

export default store;
