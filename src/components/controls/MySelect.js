import React from 'react';
import {Form} from 'react-bootstrap';

export default function MySelect(props) {
    const {label,items,value,name,onChange} = props;
    return (
        <Form.Group>
              <Form.Label>{label}</Form.Label>
              <Form.Control name={name} as="select" value={value} onChange={onChange}>
                {items.map(
                    (item) => (
                        <option key={item.class_id} value={item.class_id}>{item.text}</option>
                    )
                )}
              </Form.Control>
        </Form.Group>
    )
}
