import React from 'react';
import { useDispatch } from 'react-redux';
import { Col, Form } from 'react-bootstrap';
import { selectLanguage } from '../../actions/langActions';

function LanguageSelect() {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(selectLanguage(event.target.value));
  };

  return (
    <>
      <Col />
      <Col>
        <div id="language-selection-form">
          <Form>
            <Form.Label>언어 선택</Form.Label>
            <Form.Control as="select" name="language" onChange={handleChange}>
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">Japanese</option>
              <option value="zn-CN">Chinese</option>
            </Form.Control>
          </Form>
        </div>
      </Col>
      <Col />
    </>
  );
}

export default LanguageSelect;
