import React from 'react';
import showResults from "./showResults";
import MyForm from "./MyForm";
import {Row,Col} from 'react-bootstrap';
import { Grid } from '@material-ui/core';

const ReduxForm = (() => {
  return (
    <>
      <Grid style={{padding: 15}}>
        <Row>
          <Col sm={10}>
            <h3>フォーム画面</h3>
            <MyForm onSubmit={showResults}/>
          </Col>
        </Row>
      </Grid>
    </>
  )
})

export default ReduxForm;
