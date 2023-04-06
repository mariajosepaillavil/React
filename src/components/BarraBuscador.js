//Los componentes siempre tienen que partir con mayúsculas.
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BarraBuscador= () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
    
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Ingrese elemento"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
    
      </Container>
    </Navbar>
  )
}

export default BarraBuscador;