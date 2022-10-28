import React, {useEffect, useState} from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Text from './Text'

const SetTimeOut = (() => {

  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title =`${count}回クリックされました`
    console.log(`${count}回レンダリングしました。`)
    setTimeout(() => {
      console.log("こんにちは！")
    },3000)
  })

  return (
    <>
      <p>{`${count}回クリックされました`}</p>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>setCount((prev) => prev + 1)}>
          ボタン
        </Button>
        <Button onClick={()=>setCount(0)}>
          リセット
        </Button>
      </ButtonGroup>
      <div className='output'>
        <Text />
      </div>
    </>
  )
})

export default SetTimeOut;
