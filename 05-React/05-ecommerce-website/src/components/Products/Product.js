import React from "react";
import Container from "react-bootstrap/esm/Container";
import ProductItem from "./ProductItem";
import Row from "react-bootstrap/esm/Row";

const Product = () => {
  const dummy_products = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <Container>
      <Row>
        {dummy_products.map(item=><ProductItem prod={item} />)}
      </Row>
    </Container>
  );
};

export default Product;
