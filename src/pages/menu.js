import Nav from 'react-bootstrap/Nav';
import { salir } from '../features/services/serviceStateSlice';
import { useDispatch } from 'react-redux';

export default function MenuUser() {

    const dispatch = useDispatch();

    const evento = (eventKey) => {
        if(eventKey === "1"){
            //sessionStorage.removeItem('isLogged');
            dispatch(salir());
        }
    }

    return (
        <>
            <Nav className="flex-column ml-auto" onSelect={evento}>
                <Nav.Link eventKey="2" href="/resumen">Resumen</Nav.Link>
                <Nav.Link eventKey="2" href="/constancia">Constancia de pago</Nav.Link>
                <Nav.Link eventKey="3">Actualizar mis datos</Nav.Link>
                <Nav.Link eventKey="1" href="/">Salir</Nav.Link>
            </Nav>
        </>
    );
}