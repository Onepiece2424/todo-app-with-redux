import React,{useRef, useEffect} from "react"

const Message = (() => {

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.innerText = "Hello, Japan!!";
  }, [])

  return (
    <>
      <div ref={divRef}></div>
    </>
  )
})

export default Message;
