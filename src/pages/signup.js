import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    const navigate = useNavigate();

    const [username, setUserName] = useState();
    const [email, setUserEMail] = useState();
    const [password, setPassword] = useState();
    const [dni, setUserDNI] = useState();
    const [phone, setUserPhone] = useState();
    const [color, setColor] = useState("mb-3");
    const [color2, setColor2] = useState("");
    const [proceder, setProceder] = useState(false);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleSubmit = async e => {
        if (username) {
            if (dni) {
                if (phone) {
                    if (email) {
                        if (proceder) {
                            const formData = new FormData();
                            formData.append('username', username);
                            formData.append('dni', dni);
                            formData.append('email', email);
                            formData.append('phone', phone);
                            formData.append('password', password);

                            let url = document.location.protocol + '//' + document.location.hostname + '/api/register'

                            if(isValidEmail(email)){
                                const { data } = await axios.post(url, formData, {
                                    headers: {
                                        "content-type": "multipart/form-data",
                                        //Authorization: `Bearer ${userInfo.token}`,
                                    },
                                });
                                if (data === 1) {
                                    navigate("/", {
                                        // replace: true,
                                    });
                                    window.location.reload();
                                }
                            }else{
                                alert("Correo no válido")
                            }
                        } else {
                            alert("Las contraseñas no son iguales")
                        }
                    } else {
                        alert("Escriba su correo")
                    }
                } else {
                    alert("Escriba número de celular")
                }
            } else {
                alert("Escriba su cédula/pasaporte")
            }
        } else {
            alert("Escriba su nombre de usuario")
        }
    }

    const comprobar = (e) => {
        if (password === e.target.value) {
            setColor2("border border-success")
            setColor("border border-success mb-3")
            setProceder(true)
        } else {
            setColor2("border border-danger")
            setColor("border border-danger mb-3")
            setProceder(false)
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
                                <Form.Group className='mb-3'>
                                    <Form.Control name='username' type="text" placeholder="José Cascara" onChange={e => setUserName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control name='dni' type="text" placeholder="8-901-XXXX" onChange={e => setUserDNI(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Control name='phone' type="text" placeholder="6000-0001" onChange={e => setUserPhone(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId="formBasicEmail">
                                    <Form.Control name='email' type="email" placeholder="jose.cascara@up.ac.pa" onChange={e => setUserEMail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId="formBasicPassword">
                                    <Form.Control name='password' type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group className={color} controlId="formBasicPassword2">
                                    <Form.Control className={color2} name='password2' type="password" placeholder="Repita la contraseña" onChange={e => comprobar(e)} />
                                </Form.Group>
                                <div className="d-grid">
                                    <Nav className="flex-column" onSelect={handleSubmit}>
                                        <Nav.Link eventKey="1" className='btn btn-outline-secondary link-dark'>Registrarse</Nav.Link>
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