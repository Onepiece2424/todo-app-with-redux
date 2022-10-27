import React, {useEffect, useState} from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const SetTimeOut = (() => {

  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title =`${count}回クリックされました`
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
    </>
  )
})

export default SetTimeOut;
