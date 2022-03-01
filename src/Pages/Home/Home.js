import React from "react";
import { Button, Col, Row } from "react-bootstrap";

import {
  HeroSection,
  CategoryList,
  SectionHead,
  Slider,
  Animated,
  Bannar,
  Brands,
} from "../../Components";

import Skeleton from "react-loading-skeleton";
import Redorder from "./Redorder";

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

function Home({ isLoading }) {
  return (
    <Animated>
      <main className="page__content">
        <HeroSection />
        <CategoryList />
        <section className="container pt-5 mt-5 mb-5 mt-md-0 pt-md-6 pt-lg-7">
          <SectionHead title="Trending products" />
          <Slider />
        </section>

        <Bannar />
        <section className="container pt-5 mt-5 mb-5 mt-md-0 pt-md-6 pt-lg-7">
          <SectionHead title="Trending products" linkPath="/" />
          <Slider />
        </section>
        <section className="container pt-5 mt-5 mb-5 mt-md-0 pt-md-6 pt-lg-7">
          <SectionHead title="The best Brands" linkPath="/" />
          <Brands />
        </section>
        <section className="container pt-5 mt-5 mb-5 mt-md-0 pt-md-6 pt-lg-7">
          <SectionHead title="Reorder List" linkPath="/" />
          <Redorder />
        </section>
      </main>
    </Animated>
  );
}

export default Home;
