import React from 'react'
import { Container, Navbar, Nav, } from "react-bootstrap";
export default function MyNav() {
  return (
     <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </>
  )
}
