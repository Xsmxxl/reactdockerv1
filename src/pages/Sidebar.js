import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import MenuUser from './menu';

export default function Sidebar() {
    return (
        <>
            <Navbar expand='md' >
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='collapseExample'>
                        < MenuUser />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}