import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Navbar.Brand
          as={Link}
          to="/"
          className="ms-2 border-end border-3 pe-4 border-color rounded-end"
        >
          Alen Dunn
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/about" className="ms-2">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="ms-2">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="ms-2">
              Contact
            </Nav.Link>
            <a
              className="nav-link ms-2"
              href="https://drive.google.com/file/d/1ehy3wNocEVk30gcMbPLM4JM_k21woF4M/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
