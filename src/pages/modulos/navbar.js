import {Container, Nav, Navbar} from 'react-bootstrap';
export default function Menu() {
  return (
    <Navbar expand="sm" className="bg-success">
      <Container>
        <Navbar.Brand href="#home">6A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

