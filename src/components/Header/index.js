import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header(props) {
  const { projectsSelected, contactSelected, resumeSelected } = props;

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Alen Dunn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#about"
                onClick={() => {
                  projectsSelected(false);
                  contactSelected(false);
                  resumeSelected(false);
                }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#projects"
                onClick={() => {
                  projectsSelected(true);
                  contactSelected(false);
                  resumeSelected(false);
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                onClick={() => {
                  contactSelected(true);
                  projectsSelected(false);
                  resumeSelected(false);
                }}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="#resume"
                onClick={() => {
                  resumeSelected(true);
                  projectsSelected(false);
                  contactSelected(false);
                }}
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
