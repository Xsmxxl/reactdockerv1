import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { login } from '../features/services/serviceStateSlice';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import axios from 'axios';
import { motion } from 'framer-motion'

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const target1 = useRef(null);
    const target2 = useRef(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        if (username) {
            if (password) {
                setShow1(false)
                setShow2(false)
                formData.append('email', username);
                formData.append('password', password);

                let url = document.location.protocol + '//' + document.location.hostname + '/api/login'

                const { data } = await axios.post(url, formData, {
                    headers: {
                        "content-type": "multipart/form-data",
                        //Authorization: `Bearer ${userInfo.token}`,
                    },
                });
                if (data.username) {
                    dispatch(login({ name: data.username }))
                    navigate("/resumen", {
                        // replace: true,
                    });
                    window.location.reload();
                }else{
                    alert(data.mensaje)
                }

            } else {
                setShow2(!show2)
                setShow1(false)
            }
        } else {
            setShow1(!show1)
        }
    }

    return (
        <>
            <motion.div
                className='container'

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
                                {/*<Form.Group className='mb-3' controlId="formBasicEmail">
                                    <Form.Label>Prueba</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="jose.cascara@up.ac.pa" onChange={e => setUserName(e.target.value)}/>
                                </Form.Group>*/}
                                <Form.Group className='mb-3' ref={target1}>
                                    <Form.Control name='email' type="email" placeholder="usuario" onChange={e => { setUserName(e.target.value); setShow1(false) }} />
                                    <Overlay target={target1.current} show={show1} placement="right">
                                        {(props) => (
                                            <Tooltip id="overlay-example" {...props}>
                                                Debe colocar un usuario
                                            </Tooltip>
                                        )}
                                    </Overlay>
                                </Form.Group>
                                <Form.Group className='mb-3' controlId="formBasicPassword" ref={target2}>
                                    <Form.Control name='password' type="password" placeholder="Contraseña" onChange={e => { setPassword(e.target.value); setShow2(false) }} />
                                    <Overlay target={target2.current} show={show2} placement="right">
                                        {(props) => (
                                            <Tooltip id="overlay-example" {...props}>
                                                Debe colocar una contraseña
                                            </Tooltip>
                                        )}
                                    </Overlay>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Button variant='outline-secondary btn-block' onClick={handleSubmit}>Entrar</Button>
                                </Form.Group>
                                <br />
                                <br />
                                <Form.Group controlId="form-group-id" className='flex-column mt-2'>
                                    <Link to="/signup">Registrarse</Link><br /><br />
                                    <Link to="/forgotpassword">¡Olvidé mi Contraseña!</Link>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={12} sm={3} md={3} lg={4}></Col>
                </Row>
            </motion.div>
        </>
    );
}