import React from "react";
import Form from 'react-bootstrap/Form';

export default function Step2(props) {
    if (props.currentStep !== 2) {
        return null;
    }

    return (
        <>
            <Form.Group className='mb-3' controlId="formBasicPassword1">
                <Form.Control name='password' type="password" placeholder="Contraseña" value={props.password} onChange={props.handleChange} />
            </Form.Group>
        </>
    );
}