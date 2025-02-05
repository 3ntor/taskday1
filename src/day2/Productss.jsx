import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Productss({ ProductImage, title, btntext }) {
  return (
    <div>
      <Card style={{ width: '18rem' , height:
        '27rem'
      }}>
        <Card.Img variant="top" src={ProductImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary" className='align-items-center pe-3 ps-3'>{btntext}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
