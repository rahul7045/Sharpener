import React ,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import CartContext from '../../store/cart-context';

 const ProductItem = (props) => {
   const cartCtx = useContext(CartContext)
  const submitHandler=()=>{
    const newItem ={
      id: parseInt(props.prod.id),
      title : props.prod.title,
      price : parseInt(props.prod.price),
      imageUrl :props.prod.imageUrl,
      quantity : parseInt(1)
  }
  cartCtx.addItem(newItem)
  console.log(newItem)

}
  return (
    <Col lg={6} className ="margin-auto">
    <Card style={{ width: '18rem' }}>
    <Card.Title>{props.prod.title}</Card.Title>
    <Card.Img variant="top" src={props.prod.imageUrl} />
    <Card.Body>
    <Card.Text>{props.prod.price}</Card.Text>
      <Button onClick={submitHandler} variant="primary">Buy Now</Button>
    </Card.Body>
  </Card>
  </Col>
  )
}

export default ProductItem