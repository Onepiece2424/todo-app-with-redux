import React, {memo} from "react";

const Caluclator = memo((props) => {

  console.log("再レンダリングです。child is called.")

  return (
    <>
      <div>propsを受け取ったため再レンダリング</div>
      <button onClick={props.onClick}>child count up!</button>
    </>
  )
})

export default Caluclator;
