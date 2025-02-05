import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
<footer className="bg-dark text-light py-4 mt-5">
        <Container>
          <Row>
            <Col md={3} className="text-start">
              <h5 className="fw-bold text-danger p-2">E-<span className="text-light">shop</span></h5>
              <div className="d-flex gap-2 mt-2 p-1">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
              <p className="mt-2 small p-1">Designed & created by</p>
            </Col>
            <Col md={3}>
              <h6>Shop</h6>
              <ul className="list-unstyled">
                <li><a href="#about" className="text-light text-decoration-none">About us</a></li>
                <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
                <li><a href="#location" className="text-light text-decoration-none">Location</a></li>
                <li><a href="#faq" className="text-light text-decoration-none">FAQ</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h6>Links</h6>
              <ul className="list-unstyled">
                <li><a href="#electronics" className="text-light text-decoration-none">Electronics</a></li>
                <li><a href="#summer" className="text-light text-decoration-none">Summer</a></li>
                <li><a href="#books" className="text-light text-decoration-none">Books</a></li>
                <li><a href="#cosmetics" className="text-light text-decoration-none">Cosmetics</a></li>
                <li><a href="#furniture" className="text-light text-decoration-none">Furniture</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h6>Contact</h6>
              <p className="small">+2 35 625 453</p>
              <p className="small">eshop@gmail.com</p>
              <p className="small">123 st., London, UK</p>
            </Col>
          </Row>
        </Container>
      </footer>
  )
}
