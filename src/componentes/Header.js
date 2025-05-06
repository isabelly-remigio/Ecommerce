import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

const Header = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Loja</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Sobre</Nav.Link>
            <Nav.Link href="/cart">Carrinho</Nav.Link>
          </Nav>
          
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              name="search"
              placeholder="Buscar produtos..."
              className="me-2"
              aria-label="Search"
              style={{ borderRadius: '5px' }}
            />
            <Button variant="outline-light" type="submit">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
