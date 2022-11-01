import React, {useState} from "react";
import { useLayoutEffect } from "react";
import Message from "./Message"

const Randomizer = (() => {

  const [value, setValue] = useState(123)

  useLayoutEffect(() => {
    setValue(Math.random())
  }, [])

  return (
    <>
      <div>明日も頑張るぞ！</div>
      <div>{value}</div>
      <br></br>
      <br></br>
      <Message />
    </>
  )
})

export default Randomizer;
