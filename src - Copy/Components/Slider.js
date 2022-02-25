import React from "react";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCart/ProductCard";

const Slider = () => {
     const { products } = useSelector((state) => state.products);
  {/* 
     // Create array with 1000 slides
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  */}

  const getProductsByRating = products.filter(product => product.rating.rate > 3);

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
        <SwiperSlide key={product} virtualIndex={index}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
