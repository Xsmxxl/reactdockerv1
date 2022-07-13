import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

function App() {
  return (
    <div className="App">
      <Navbar expand='lg' variant="light">
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <NavLink>Otro</NavLink>
              <NavLink>Si</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <p>
          Actualizando
        </p>
      </Container>
    </div>
  );
}

export default App;
