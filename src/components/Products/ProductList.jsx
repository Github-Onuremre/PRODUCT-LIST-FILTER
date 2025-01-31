import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "./ProductCard.jsx";


const ProductList = ({ filteredProducts }) => {
  return (
    <>
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {filteredProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
