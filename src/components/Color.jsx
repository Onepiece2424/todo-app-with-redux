import React, { useState } from "react"

const Color = (() => {

  const [count, setCount] = useState(0);
  const [isRed, setIsRed] = useState(false);

  return (
    <>
      <p>3の倍数の回数でボタンが赤くなります。☟</p>
      <div>押したボタンの合計数: {count} 回</div>
      <br></br>
      <div>
        <button
          style={ isRed ? {color: 'red'} : null}
          onClick={() => {
            setCount(count + 1);
            setIsRed((count + 1) % 3 === 0);
          }}
        >ボタン
        </button>
      </div>

    </>
  )
})

export default Color;
