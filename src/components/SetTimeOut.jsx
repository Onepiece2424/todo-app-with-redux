import React, {useEffect, useState} from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Text from './Text'

const SetTimeOut = (() => {

  const [count, setCount] = useState(0)

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

  // // 5秒後にページ切り替えが起きる処理
  // const hoge = (() => {
  //   setTimeout(() => {
  //     document.write("今日も良い天気だ")
  //   },5000)
  // })

  // hoge();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("あああ")
    }, 500)
    return () => clearTimeout(timer)
  },[])


  // テキストのstateを定義
  const [text, setText] = useState("")
  const [value, setValue] = useState(false)

  // 画面描画後に処理を実行
  useEffect(() => {
    const display_text = setTimeout (() => {
      setText("表示されました！")     // テキストの表示
    }, 500)
    return () => clearTimeout(display_text)                         // 0.5秒後表示
  }, []);

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
    </>
  )
})

export default SetTimeOut;
