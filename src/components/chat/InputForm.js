import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputText from './InputText';
import Button from './Button';

function InputForm() {
  return (
    <Container>
      <Row>
        <Col md="10">
          <InputText />
        </Col>
        <Col md="2">
          <Button style="btn btn-dark" text="뿌슝빠슝" />
          {/* TODO: onClcik event handler 구현 */}
        </Col>
      </Row>
    </Container>
  );
}

export default InputForm;
