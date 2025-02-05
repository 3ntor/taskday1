import React from 'react'
import { Container,  Form, FormControl, Button, Row, Col, Card, Nav } from "react-bootstrap";
import ImageAre from "../assets/images/headphones-5064411_1280.jpg";
import ImageAre1 from "../assets/images/OIP.jpeg";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function AboutSec() {
  return (
    <>
    <div className='bg-danger-subtle pb-5 pt-5 rounded-4 me-5 ms-5'>
      <Container className="text-center">
        <Row className="align-items-center">
          <Col md={4} className="text-start ps-5">
            <h2>Get the best product at your home</h2>
            <Form className="d-flex align-items-center mt-3 p-3">
              <FormControl type="search" placeholder="Search your favorite product" className="me-2" />
              <Button variant="dark">Search</Button>
            </Form>
          </Col>
          <Col md={4} className="ps-5">
              <Card.Img variant="top" src={ImageAre} alt="headphones" width={100} height={220} className="rounded " />
          </Col>
          <Col md={1} className="pe-5">
          </Col>
          <Col md={2} className="bottom pe-5 ">
              <Card.Img variant="top" src={ImageAre1} alt="headphones" width={30} height={200} className="rounded " />
          </Col>
            <Col md={1} className='d-block mb-5'>
            <Nav.Link href="#instagram"><FaInstagram/></Nav.Link>
            <Nav.Link href="#facebook"><FaFacebook/></Nav.Link>
            <Nav.Link href="#twitter"><FaTwitter/></Nav.Link> 
            </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}
