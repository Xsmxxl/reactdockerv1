import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FileEarmarkArrowUp } from 'react-bootstrap-icons';
import axios from 'axios';

export default function Step2(props) {

    const [file, setFile] = useState(null)

    if (props.currentStep !== 2) {
        return null;
    }

    const handleFile = e => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        let url = document.location.protocol + '//' + document.location.hostname + '/api/img'
        
        const {data} = await axios.post(url, formData, {
            headers: {
                "content-type": "multipart/form-data",
                //Authorization: `Bearer ${userInfo.token}`,
            },
        });
        console.log(data.file_name)
    }

    return (
        <>
            <Form.Label>Captura o foto de comprobante de transacción bancaria</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control name="file" type="file" onChange={handleFile} />
                <Button variant="btn btn-outline-secondary" type="submit" onClick={handleSubmit}>
                    <FileEarmarkArrowUp />
                </Button>
            </InputGroup>
        </>
    );
}