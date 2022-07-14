import Nav from 'react-bootstrap/Nav';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <Nav className="flex-column">
                    <Nav.Link>Resumen</Nav.Link>
                    <Nav.Link>Actualizar mis datos</Nav.Link>
                </Nav>
            </div>
        </>
    );
}