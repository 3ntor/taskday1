import React from 'react'
import { Container } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function NavBarr() {
  return (
    <Container className="mt-4 text-center">
        <div className="d-flex justify-content-between align-items-center px-5">
          <div className="d-flex gap-5">
            <a href="#electronics" className="text-decoration-none text-dark">Electronics</a>
            <a href="#cosmetics" className="text-decoration-none text-dark">Cosmetics</a>
            <a href="#clothes" className="text-decoration-none text-dark">Clothes</a>
            <a href="#books" className="text-decoration-none text-dark">Books</a>
            <a href="#furniture" className="text-decoration-none text-dark">Furniture</a>
            <a href="#see-all" className="text-decoration-none text-danger">See all</a>
          </div>
          <div className="d-flex gap-3">
            <FaArrowLeft className="text-dark cursor-pointer" />
            <FaArrowRight className="text-dark cursor-pointer" />
          </div>
        </div>
      </Container>
  )
}
