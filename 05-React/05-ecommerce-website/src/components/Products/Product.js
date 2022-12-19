import React from "react";
import Container from "react-bootstrap/esm/Container";
import ProductItem from "./ProductItem";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {Link} from 'react-router-dom'

const Product = (props) => {
  const dummy_products = [
    {
      id : 1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id :2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id :3 ,
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
    <Container>
      <Row>
        {dummy_products.map(item=><ProductItem key={item.id} prod={item} />)}
      </Row>
    </Container>
  );
};

export default Product;
