import React from "react";

import HeroSection from "../Components/HeroSection/HeroSection";
import CategoryList from "../Components/CategoryList/CategoryList";
import SectionHead from "../Components/SectionTitle/SectionHead";
import Slider from "../Components/Slider";
import { Col, Row } from "react-bootstrap";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loading = (
  <div>
    <div className="col-md-12">
      <Skeleton height={40} />
    </div>
    <div className="col-md-12">
      <Skeleton height={70} count={2} />
    </div>
  </div>
);

function Home({isLoading}) {
  return (
    <section className="page__content">
      <HeroSection />
      <CategoryList />
      <section className="container pt-5 mt-5 mb-5 mt-md-0 pt-md-6 pt-lg-7">
        <SectionHead title="Trending products" />
        <Row className="pb-1">
          <Col lg={3} md={4} sm={6} className="mb-grid-gutter"></Col>
        </Row>
        <Row className="pb-1">
          <Col sm={12}>
            <Slider />
          </Col>
        </Row>
      </section>
    </section>
  );
}

export default Home;
