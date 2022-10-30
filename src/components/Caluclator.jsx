import React, {memo} from "react";

const Caluclator = memo(() => {

  console.log("再レンダリングです。")

  return (
    <>
      <div>こんばんは。</div>
    </>
  )
})

export default Caluclator;
