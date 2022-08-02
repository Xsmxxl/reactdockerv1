import React, {useState} from "react";
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

    const handleSubmit = e => {
        e.preventDefault();
        console.log(file)
        const formData = new FormData();

        formData.append('File', file);

        let url = document.location.origin + '/api/upload/img'
        console.log(url)

        /*fetch(
            'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
            {
                method: 'POST',
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });*/
    }

    return (
        <>
            <Form.Label>Captura o foto de comprobante de transacción bancaria</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control type="file" onChange={handleFile} />
                <Button variant="btn btn-outline-secondary" type="submit" onClick={handleSubmit}>
                    <FileEarmarkArrowUp />
                </Button>
            </InputGroup>
        </>
    );
}