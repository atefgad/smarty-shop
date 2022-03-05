import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./Category.scss";

import { ProductCard, Animated, PageTitle } from "../../Components";

import { Page404 } from "..";

function Category() {
  const { products } = useSelector((state) => state.products);
  let { catName } = useParams();

  const catFilter = products.filter(
    (product) => product.category.replace(" ", "_") === catName
  );

  if (Object.values(catFilter).length === 0) return <Page404 />;

  return (
    <Animated>
      <PageTitle name={catName.replace("_", " ")} />
      <div className="category__page">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            {/*
            <Col md={4} className="bg-light shadow rounded-2">
              <aside></aside>
            </Col>
          */}
            <Col md={12} className="">
              <Row className="">
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
    </Animated>
  );
}

export default Category;
