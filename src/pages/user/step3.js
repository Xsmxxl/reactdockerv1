import React from "react";
import Form from 'react-bootstrap/Form';

export default function Step3(props) {
    if (props.currentStep !== 3) {
        return null;
    }

    return (
        <>
            <Form.Group className='mb-3' controlId="formBasicPassword">
                <Form.Control name='password2' type="password" placeholder="Repita su Contraseña" value={props.password2} onChange={props.handleChange} />
            </Form.Group>
        </>
    );
}