import React, {useState} from 'react';
import { Form } from 'react-bootstrap';

export function useForm(initialFormValues) {
    const [values, setValues] = useState(initialFormValues);
    const [errorsX, setErrorsX] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        //console.debug(e.target.value);
        setValues({
            ...values,
            [name]:value
        });
    }

    const resetForm = () => {
        setValues(initialFormValues);
        setErrorsX({});
    }

    const handleNumberInputChange = (e) => {
        const re = /^(?:\d*\.\d{1,2}|\d+)$/;
        const { name, value } = e.target;
        if (value === '' || re.test(value)) {
            setValues({
                ...values,
                [name]:value
            });
        }
        //console.debug(e.target);
    }

    const onSubmit = (e) => {
        return e;
    }

    return {
        values,
        setValues,
        errorsX,
        setErrorsX,
        handleInputChange,
        handleNumberInputChange,
        onSubmit,
        resetForm
    }
}

export function MyForm(props) {
    const { children, ...other } = props;

    return (
        <Form {...other}>
            {props.children}
        </Form>
    )
}

