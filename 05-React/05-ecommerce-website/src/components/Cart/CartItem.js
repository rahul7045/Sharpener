import React from 'react'
import './CartItem.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const CartItem = (props) => {
  return (
    <div className='cartitem-main'>
        <div className='cartitem-img'>
            <img className='cartitem-img' src={props.prod.imageUrl} />
            <span>{props.prod.title}</span>
        </div>
        <div className='cartitem-price'>{props.prod.price}</div>
        <div className='cartitem-button'>
            <span className='cartitem-quantity'>2</span>
            <button>Delete</button>
        </div>
    </div>
  )
}
export default CartItem
