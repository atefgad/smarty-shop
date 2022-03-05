import React from "react";
import { useSelector } from "react-redux";

import {
  HeroSection,
  CategoryList,
  SectionHead,
  ProductsSlides,
  Animated,
  Bannar,
  Brands,
} from "../../Components";

function Home({ isLoading }) {
  const { products } = useSelector((state) => state.products);

  const getProductsByRating = products.filter(
    (product) => product.rating.rate > 4
  );
  const getProductsByCategory = products.filter(
    (product) => product.category === "electronics"
  );

  return (
    <Animated>
      <main className="page__content">
        <HeroSection />

        <CategoryList />

        <section className="container pt-5 mt-2 mb-6 mt-md-0 pt-md-6">
          <SectionHead title="Trending products" />
          <ProductsSlides products={getProductsByRating} />
        </section>

        <section className="">
          <Bannar />
        </section>

        <section className="container pt-5 mt-5 mb-5 mt-md-0 pt-md-6">
          <SectionHead title="Electronics" linkPath="/category/electronics" />
          <ProductsSlides products={getProductsByCategory} />
        </section>

        <section className="container pt-5 mt-5 mb-5 mt-md-0">
          <SectionHead title="The best Brands" linkPath="/" />
          <Brands />
        </section>
      </main>
    </Animated>
  );
}

export default Home;
