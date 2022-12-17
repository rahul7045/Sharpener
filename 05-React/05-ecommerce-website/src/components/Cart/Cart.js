import React from "react";
import Container from "react-bootstrap/esm/Container";
import CartItem from "./CartItem";
import Row from "react-bootstrap/esm/Row";
import './Cart.css'
import CloseButton from 'react-bootstrap/CloseButton';


export const Cart = (props) => {
  const dummy_cart = [
    {
      id:1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id:2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id:3,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:4,
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <Container className="cart">
       <CloseButton onClick={props.onHideCart} />
      <div className="cart-main">
        <div className="cart-item">ITEM</div>
        <div className="cart-price">PRICE</div>
        <div className="cart-quantity">QUANTITY</div>
      </div>
   
      {dummy_cart.map(item=><CartItem key={item.id} prod={item} />)}

  
  </Container>
  );
};

export default Cart
