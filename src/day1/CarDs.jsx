import React from 'react'
import { Button, Card } from "react-bootstrap";
import ProductImage from "../assets/images/صور-مكتب-1.jpg"
export default function CarDs({title,desc,btntext}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ProductImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">{btntext}</Button>
      </Card.Body>
    </Card>
  )
}
