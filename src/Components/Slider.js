import React from "react";
import { useSelector } from "react-redux";

import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

import { ProductCard } from "../Components";

const Slider = () => {
  const { products } = useSelector((state) => state.products);

  const getProductsByRating = products.filter(
    (product) => product.rating.rate > 3
  );

  console.log("getProductsByRating => ", getProductsByRating);
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
      {getProductsByRating.map((product, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
