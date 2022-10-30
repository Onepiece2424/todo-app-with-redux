import React, {useEffect, useState} from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Text from './Text'
import Caluclator from './Caluclator';
import { useCallback } from 'react';

const SetTimeOut = (() => {

  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [value, setValue] = useState(false)
  const [number, setNumber] = useState(0)
  const [childCount, setChildCount] = useState(0)

  // ページ更新1秒後に１度だけ行われる処理
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("ページ更新1秒後、1回だけの処理です。")
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // countが変化したら行われる処理
  useEffect(() => {
    document.title =`${count}回クリックされました`
    // console.log(`${count}回レンダリングしました。`)
    setTimeout(() => {
      console.log("countが変化したらしいです!")
    },3000)
  }, [count])

  // 0.5秒後にコンソールにテキスト表示
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("あああ")
    }, 500)
    return () => clearTimeout(timer)
  },[])

  // 画面更新0.5秒後にテキスト表示
  useEffect(() => {
    const display_text = setTimeout (() => {
      setText("表示されました！")
    }, 500)
    return () => clearTimeout(display_text)
  }, []);

  // childCountの更新、useCallbackを使用し、再レンダリングを防止
  const onClickChildCount = useCallback(() => {
    setChildCount(childCount + 1)
  }, [childCount]);

  return (
    <>
      <div>
        <p>{`${count}回クリックされました`}</p>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => setCount((prev) => prev + 1)}>
            ボタン
          </Button>
          <Button onClick={() => setCount(0)}>
            リセット
          </Button>
        </ButtonGroup>
      </div>
      <br></br>
      <br></br>
      <div className='output'>
        { value ?
         <Text  />
        :
        <p>{`text:${text}`}</p>
        }
      </div>
      <br></br>
      <div>
        <button onClick={() => setValue(!value)}>{value ? `テキストを表示するボタン` : `テキストを隠すボタン`}</button>
      </div>
      <br></br>
      <br></br>
      <Caluclator onClick={onClickChildCount} />
      <br></br>
      <br></br>
      <br></br>
      <div>再レンダリング{number}回</div>
      <div>
        <button onClick={() => setNumber(number + 1)}>再レンダリングボタン</button>
      </div>
    </>
  )
})

export default SetTimeOut;
