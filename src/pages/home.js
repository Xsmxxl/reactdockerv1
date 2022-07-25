import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ThreeDotsVertical } from 'react-bootstrap-icons';

import { useState } from 'react';
import { Outlet } from "react-router-dom";
import MenuUser from './menu';

import {motion} from 'framer-motion'

export default function Home() {

    //const serviceStates = useSelector(service => service.serviceState)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>  
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand>
                            <img
                                src={process.env.PUBLIC_URL + "/logoPesoBajo_0.jpg"}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Universidad de Panamá"
                            />
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/resumen">Home</Nav.Link>
                            <Nav.Link>Otro</Nav.Link>
                            <Nav.Link>Si</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <div className='d-md-none d-lg-none d-xl-none'>
                                <Button variant="light" onClick={handleShow}>
                                    <ThreeDotsVertical />
                                </Button>
                            </div>
                        </Nav>
                    </Container>
                </Navbar>
            </motion.div>
            <hr className='my-0 border border-dark' />
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Navbar.Brand>
                            <img
                                src={process.env.PUBLIC_URL + "/logoPesoBajo_0.jpg"}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Universidad de Panamá"
                            />
                        </Navbar.Brand>
                        Universidad de Panamá
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Navbar expand='md'>
                        <Container>
                            <MenuUser/>
                        </Container>
                    </Navbar>
                </Offcanvas.Body>
            </Offcanvas>
            <motion.div
                className='prueba'

                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <Row className='mt-0 mx-0 my-auto' xs={12} md={12}>
                    <Col xs={12} md={3} className='bg-light d-none d-sm-none d-md-block d-lg-block'>
                        <Sidebar />
                    </Col>
                    <Col xs={12} md={9}>
                        <div style={{ overflowY: 'auto' }} className='cosas'>

                            <Outlet />

                        </div>
                    </Col>
                </Row>
            </motion.div>
        </>
    );
};