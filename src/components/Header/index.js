import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Alen Dunn
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1ehy3wNocEVk30gcMbPLM4JM_k21woF4M/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
