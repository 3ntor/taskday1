import React from 'react'
import{ Col, Button}
 from "react-bootstrap";
export default function HeroSec(props) {
  console.log(props);
  return (
    <div className={`d-flex ${props.design} bg-secondary py-5 justify-content-center align-items-center row m-1`} >
          <Col md={6} className='text-center'>
            <h1 className='me-5'>Catchy Headline</h1>
            <p className='me-5'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam cum a 
              facilis quia reprehenderit voluptatum facere inventore,</p>
            <Button variant="success" >CTA</Button>
          </Col>
          <Col md={6} className='text-center' >
            <div><img src="https://www.mexatk.com/wp-content/uploads/2020/02/%D8%B5%D9%88%D8%B1-%D9%85%D9%83%D8%AA%D8%A8-1.jpg" alt="" height={250} width={250} /></div>
          </Col>
    </div>
  )
}
