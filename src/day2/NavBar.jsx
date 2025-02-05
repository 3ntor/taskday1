import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="px-4">
      <Navbar.Brand href="#home" className="fw-bold">
        <span className="text-danger">E-</span>shop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex justify-content-between w-50">
          <Nav.Link href="#home" className="text-uppercase">Home</Nav.Link>
          <Nav.Link href="#products" className="text-uppercase">Products</Nav.Link>
          <Nav.Link href="#service" className="text-uppercase">Service</Nav.Link>
          <Nav.Link href="#contact" className="text-uppercase">Contact</Nav.Link>
          <Nav.Link href="#search" className="text-uppercase">
            <FaSearch />
            <span className="ms-1"></span>
          </Nav.Link>
          <Nav.Link href="#wishlist" className="text-uppercase">
            <FaHeart />
            <span className="ms-1"></span>
          </Nav.Link>
          <Nav.Link href="#cart" className="text-uppercase">
            <FaShoppingCart />
            <span className="ms-1"></span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}