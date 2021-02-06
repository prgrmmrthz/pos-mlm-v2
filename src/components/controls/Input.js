import React from "react";
import {Form} from 'react-bootstrap';

export default function MyInput(props) {
  const { name, label, value, onChange, placeholder, type } = props;
  return (
    <div>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Form.Group>
    </div>
  );
}
