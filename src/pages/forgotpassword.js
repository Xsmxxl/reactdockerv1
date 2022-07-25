import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import {motion} from 'framer-motion'

/*async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}*/

export default function ForgotPassword() {

    //const dispatch = useDispatch();

    const [email, setUserEMail] = useState();

    //let eso = true;
    const handleSubmit = async e => {
        //e.preventDefault();
        console.log(email)
    }

    return (
        <>
            <motion.div
                className='container'

                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <Row className='mt-0 mx-0 my-auto mt-5' xs={12}>
                    <Col xs={12} sm={3} md={3} lg={4}></Col>
                    <Col className='mt-5' xs={12} sm={6} md={6} lg={4}>
                        <div>
                            <img
                                src={process.env.PUBLIC_URL + "/banner_0.jpg"}
                                width="100%"
                                className="d-inline-block align-top"
                                alt="Universidad de Panamá"
                            />
                            <br />
                            <Form className='mt-5'>
                                <Form.Group className='mb-3' controlId="formBasicEmail">
                                    <Form.Label>Recuperación de contraseña</Form.Label><br/>
                                    <Form.Control name='email' type="email" placeholder="jose.cascara@up.ac.pa" onChange={e => setUserEMail(e.target.value)} />
                                </Form.Group>
                                <div className="d-grid">
                                    <Nav className="flex-column" onSelect={handleSubmit}>
                                        <Nav.Link eventKey="1" href="/" className='btn btn-outline-secondary link-dark'>Enviar</Nav.Link>
                                    </Nav>
                                </div>
                                <br />
                                <br />
                            </Form>
                        </div>
                    </Col>
                    <Col xs={12} sm={3} md={3} lg={4}></Col>
                </Row>
            </motion.div>
        </>
    );
}