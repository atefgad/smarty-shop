import React from "react";

import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

import { ProductCard } from ".";

const ProductsSlides = ({ products }) => {
  return (
    <Swiper
      modules={[Virtual]}
      effect="fade"
      spaceBetween={30}
      slidesPerView={4}
      virtual
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlides;
