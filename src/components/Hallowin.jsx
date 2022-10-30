import React, { useEffect, useReducer } from "react"

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_TICK": {
        return {
          ...state,
          count: 0,
          tick: action.tick
        };
      }

      case "ADD_COUNT": {
        return {
          ...state,
          count: state.count + 1
        };
      }

      default:
        return state;
    }
  };

const Hallowin = (() => {

  const [state, dispatch] = useReducer(reducer, { tick: 1000, count: 0});

  const handleOnChangeTick = (e) => {
    dispatch({ type: "SET_TICK", tick: parseInt(e.target.value) });
  };

  useEffect(() => {
    const time = setInterval(() => {
      dispatch({ type: "ADD_COUNT" });
    }, state.tick);

    return () => clearInterval(time);
  }, [ state.tick ])

  return (
    <div>
      <p>{state.count}</p>
      <input value={state.tick} onChange={handleOnChangeTick} />
    </div>
  )
})

export default Hallowin;
