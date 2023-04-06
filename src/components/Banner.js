import { Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap';

const Banner = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="../imagenes/logo.png" width="120px" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="Acceso directo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Opción 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Opción 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Opción 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" style={{ color: "pink" }}>
              QUIENES SOMOS
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "pink" }}>
              MATERIA
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "pink" }}>
              NUESTRO PROGRAMA
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "pink" }}>
              TE ACONSEJAMOS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-grid gap-2 col-2 mx-auto ms-150">
          <Button variant="primary">Login</Button>
          <Button variant="primary">Registrer</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Banner;

