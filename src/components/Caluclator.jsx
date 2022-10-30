import React, {memo} from "react";
import Randomizer from "./Randomizer"

const Caluclator = memo((props) => {

  console.log("再レンダリングです。child is called.")

  return (
    <>
      <div>propsを受け取ったため再レンダリング</div>
      <button onClick={props.onClick}>child count up!</button>
      <br></br>
      <br></br>
      <Randomizer />
      <br></br>
    </>
  )
})

export default Caluclator;
