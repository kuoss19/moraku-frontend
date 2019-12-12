/* eslint-disable react/prop-types */
/* eslint-disable react/style-prop-object */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import { sendMessage } from '../../actions/chat/message';

function InputForm({ client }) {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newMessage = {
      sender: client.current.id,
      text: message,
    };
    client.current.send(newMessage);
    dispatch(sendMessage(newMessage));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control onChange={handleChange} />
          <InputGroup.Append>
            <Button variant="dark" type="submit">
              뿌슝빠슝
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </Container>
  );
}

export default InputForm;
