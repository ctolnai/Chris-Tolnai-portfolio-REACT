import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap/';

const styles = {

}

function NavBar({currentPage, handlePageChange}){ 
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home" onClick={() => handlePageChange('Home')}>
      Chris Tolnai</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="My Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/p1" onClick={() => handlePageChange('P1')}>Project 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/p2" onClick={() => handlePageChange('P2')}>Project 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/p3" onClick={() => handlePageChange('P3')}>Project 3</NavDropdown.Item>
        <NavDropdown.Item href="#action/p4" onClick={() => handlePageChange('P4')}>Project 4</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#About" onClick={() => handlePageChange('About')}>About Me</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/assets/resume.pdf" target="_blank" download>My Resume</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default NavBar;
