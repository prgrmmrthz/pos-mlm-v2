import React, {useState} from 'react';
import { Form } from 'react-bootstrap';

export function useForm(initialFormValues) {
    const [values, setValues] = useState(initialFormValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        //console.debug(e.target);
        setValues({
            ...values,
            [name]:value
        });
    }

    return {
        values,
        setValues,
        handleInputChange
    }
}

export function MyForm(props) {
    return (
        <Form>
            {props.children}
        </Form>
    )
}

