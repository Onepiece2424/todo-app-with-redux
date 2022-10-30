import React, { useState, useEffect } from "react";

const EvenNumber = (() => {

  const [birthday, setBirthday] = useState(0)
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    const countUp = (() => {
      if (birthday % 2 === 0) {
        console.log(birthday)
      };
    })
    countUp();
  }, [birthday])

  useEffect(() => {
    const time = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(time);
  }, []);

  return (
    <>
      <div>今日は誕生日です。（この文章に意味はないです。）</div>
      <p>{birthday}</p>
      <div>
        <button onClick={() => setBirthday(birthday + 1)}>更新ボタン</button>
      </div>
      <br></br>
      <br></br>
      <div>
        <p>カウントが始まりました。</p>
        <p>{count}</p>
      </div>
    </>
  )
})

export default EvenNumber;
