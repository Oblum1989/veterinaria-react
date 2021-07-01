import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

function HeaderBar(){
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="./index.html">Veterinaria</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="./index.html">Mascotas</Nav.Link>
          <Nav.Link href="./veterinarian.html">Veterianri@s</Nav.Link>
          <Nav.Link href="./consultations.html">Consultas</Nav.Link>
          <Nav.Link href="./owners.html">Dueños</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderBar;