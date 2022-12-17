import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

 const ProductItem = (props) => {
  return (
    <Col lg={6} className ="margin-auto">
    <Card style={{ width: '18rem' }}>
    <Card.Title>{props.prod.title}</Card.Title>
    <Card.Img variant="top" src={props.prod.imageUrl} />
    <Card.Body>
    <Card.Text>{props.prod.price}</Card.Text>
      <Button variant="primary">Buy Now</Button>
    </Card.Body>
  </Card>
  </Col>
  )
}

export default ProductItem