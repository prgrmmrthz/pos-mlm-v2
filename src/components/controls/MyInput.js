import React from "react";
import { Form } from "react-bootstrap";

export default function MyInput(props) {
  const { name, label, value, onChange, placeholder, type, error=null } = props;
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
        {error && <small className="ml-1 text-danger font-weight-bold">{error}</small>}
      </Form.Group>
    </div>
  );
}
