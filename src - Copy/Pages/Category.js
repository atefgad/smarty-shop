import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../Components/ProductCart/ProductCard";

import Page404 from "./Page404";

function Category() {
  const { products } = useSelector((state) => state.products);
  let { catName } = useParams();

  const catFilter = products.filter(
    (product) => product.category.replace(" ", "_") === catName
  );

  // if (Object.values(catFilter).length === 0) return <Page404 />;

  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col md={3} className="">
            <h2>Left SIde</h2>
          </Col>
          <Col md={9} className="">
            <h2>{catName.replace("_", " ")}</h2>

            <Row className="d-flex justify-content-start align-items-end">
              {catFilter.map((product) => (
                <Col lg={4} md={6} className="mb-5" key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Category;