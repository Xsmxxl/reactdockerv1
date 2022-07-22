import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResumenUser from './resumen';
import GraficoAdmin from './admin/graph';
import Sidebar from './Sidebar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ThreeDotsVertical } from 'react-bootstrap-icons';

import { useState } from 'react';

export default function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    //const [active, setActive] = useState("resumen");
    const [active, setActive] = useState("resumen");

    const evento = (eventKey) => {
        if(eventKey == 1){
            sessionStorage.removeItem('isLogged');
        }
    }

    return (
        <>
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
                        <Nav.Link href="/">Home</Nav.Link>
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
                    <Navbar expand='md' >
                        <Container>
                            <Nav className="flex-column" onSelect={evento}>
                                <Nav.Link>Resumen</Nav.Link>
                                <Nav.Link>Actualizar mis datos</Nav.Link>
                                <Nav.Link eventKey="1" href="/">Salir</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </Offcanvas.Body>
            </Offcanvas>
            <div className='prueba'>
                <Row className='mt-0 mx-0 my-auto' xs={12} md={12}>
                    <Col xs={12} md={3} className='bg-light d-none d-sm-none d-md-block d-lg-block'>
                        <Sidebar />
                    </Col>
                    <Col xs={12} md={9}>
                        <div style={{ overflowY: 'auto' }} className='cosas'>


                            {active === "resumen" && <GraficoAdmin />}
                            <br />
                            {active === "resumen" && <ResumenUser />}


                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};