import React from 'react'
import { Container, Row, Col, Button, } 
from "react-bootstrap";
export default function ConTent() {
  return (
<Container fluid className="py-5 bg-danger-subtle">
    <Row>
        <Col md={12} className=" text-center ">
        <h1 className='p-2' >Catchy Headline</h1>
        <p className='p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Dicta molestias quod est dolores cumque<br />. Adipisci suscipit consequatur id voluptatibus dolore fugiat minima, <br /> at laboriosam tempore doloremque possimus explicabo dolorem architecto?</p>
        <Button variant="success">CTA</Button>
        </Col>
    </Row>
</Container>
  )
}
