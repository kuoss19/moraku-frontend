import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import InputText from './InputText.js';
import Button from './Button.js';

function InputForm() {
  return (
    <Container>
      <Row>
        <Col md="10">
          <InputText />
        </Col>
        <Col md="2">
          <Button style="btn btn-dark" onClick="" text="뿌슝빠슝" />
        </Col>
      </Row>
    </Container>
  );
}

export default InputForm;
