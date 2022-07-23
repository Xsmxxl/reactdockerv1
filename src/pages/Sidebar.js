import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { salir } from '../features/services/serviceStateSlice';
import { useDispatch } from 'react-redux';

export default function Sidebar() {

    const dispatch = useDispatch();

    const evento = (eventKey) => {
        if(eventKey === "1"){
            //sessionStorage.removeItem('isLogged');
            dispatch(salir())
        }
    }

    return (
        <>
            <Navbar expand='md' >
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='collapseExample'>
                        <Nav className="flex-column" onSelect={evento}>
                            <Nav.Link>Resumen</Nav.Link>
                            <Nav.Link>Actualizar mis datos</Nav.Link>
                            <Nav.Link eventKey="1" >Salir</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}