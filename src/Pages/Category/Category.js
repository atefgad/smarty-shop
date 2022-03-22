import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./Category.scss";

import { ProductCard, Animated, PageTitle } from "../../Components";

import { Page404 } from "../../Pages";
import { motion } from "framer-motion";

function Category() {
  const { products } = useSelector((state) => state.products);
  let { catName } = useParams();

  const catFilter = products.filter(
    (product) => product.category.replace(" ", "_") === catName
  );

  if (Object.values(catFilter).length <= 0) return <Page404 />;

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
                {catFilter.map((product, i) => (
                  <motion.div
                    className="col-lg-4 col-md-6 mb-5"
                    key={product.id}
                    initial={{
                      opacity: 0,
                      translateX: i % 2 === 0 ? -50 : 50,
                      translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.2 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
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
