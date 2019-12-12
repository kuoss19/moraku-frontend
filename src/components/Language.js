import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

function Language() {
  return (
    <Form>
      <Form.Label>언어 선택</Form.Label>
      <Form.Control as="select" name="language">
        <option value="ko">한국어</option>
        <option value="en">English</option>
        <option value="ja">Japanese</option>
        <option value="zn-CN">Chinese</option>
      </Form.Control>
    </Form>
  );
}

export default Language;
