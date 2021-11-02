import {React} from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import Footer from "./Footer";



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="container">
      <Nav.Link >
              <Link style={{padding:"8px"}}to={"/about"}>Chris Tolnai</Link>
            </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{textDecoration:'none'}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/projects">
                <Link to={"/projects"}>All Projects</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/p1">
                <Link to={"/p1"}>ParkSmart</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/p2">
                <Link to={"/p2"}>Work Day Scheduler</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/p3">
                <Link to={"/p3"}>Note Taker</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/p4">
                <Link to={"/p4"}>Job Search</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/p5">
                <Link to={"/p5"}>News For You</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{textDecoration:'none'}} className="resume" href="/assets/myresume.pdf" target="_blank" download>
              My Resume
              </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="contact">
              <Footer />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

