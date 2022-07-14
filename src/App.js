import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResumenUser from './pages/resumen';
import GraficoAdmin from './pages/admin/graph';
import Sidebar from './pages/Sidebar';

//Ejemplo en https://coderthemes.com/hyper/saas/index.html

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand='lg' variant="light">
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Otro</Nav.Link>
              <Nav.Link>Si</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className='my-0 border border-dark' />
      <div className='prueba'>
        <Row className='mt-0 mx-0 my-auto' xs={12} md={12}>
          <Col xs={12} md={3}>
            <Sidebar />
          </Col>
          <Col xs={12} md={9}>
            <p>Estes es el resumen</p>
            <GraficoAdmin />
            <ResumenUser />
          </Col>
        </Row>
      </div>

    </div>
  );
}

export default App;
