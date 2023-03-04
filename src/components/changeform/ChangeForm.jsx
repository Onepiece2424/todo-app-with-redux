import React, { useRef } from 'react'
import { reduxForm, Field, change } from 'redux-form'
import renderField from '../common/renderField';
import { Button } from '@material-ui/core';
import { validate } from '../../func/validate';

const Changeform = ({ handleSubmit, pristine, submitting, reset, dispatch }) => {

  // 隠しフィールドに値を参照させる
  const inputEl = useRef(null)
  inputEl.current =  dispatch(change('changeform', 'hiddenvalue', '隠しフィールドの値だよ〜。'))

  // チェックが変更されたら、'checkboxValue'フィールドの値を動的に変更する
  const onCheckboxClick = (e) => {
    e.target.checked ? dispatch(change('changeform', 'checkboxValue', '今日も良い天気ですね！')) : dispatch(change('changeform', 'checkboxValue'))
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Field name="username" component={renderField} label="名前" />
        <br></br>
        <div>
        <label>チェックボックス（チェックすると設定された値が表示されます。）</label>
        <div>
          <input type="checkbox" onChange={onCheckboxClick} />
          <Field name="checkboxValue" component={renderField} type="text" />
        </div>
        <br></br>
        <Field name="hiddenvalue" component={renderField} type="hidden" ref={inputEl} />
        </div>
        <br></br>
        <Button color="secondary" variant="contained" type="submit">送信</Button>
        <Button color="secondary" variant="contained" disabled={pristine || submitting} onClick={reset}>
          クリア
        </Button>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'changeform',
  validate
})(Changeform)
