import React from "react";

import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

// Import Brands styles
import "./Brands.scss";

// Import Brands Images
import b1 from "../../Assets/images/brands/01.png";
import b2 from "../../Assets/images/brands/02.png";
import b3 from "../../Assets/images/brands/03.png";
import b5 from "../../Assets/images/brands/05.png";
import b6 from "../../Assets/images/brands/06.png";
import b7 from "../../Assets/images/brands/07.png";
import b8 from "../../Assets/images/brands/08.png";
import b9 from "../../Assets/images/brands/09.png";
import b10 from "../../Assets/images/brands/10.png";
import b11 from "../../Assets/images/brands/11.png";
import b12 from "../../Assets/images/brands/12.png";

const brandImages = [b1, b2, b3, b5, b6, b7, b8, b9, b10, b11, b12];

const Brands = () => {
  return (
    <Swiper
      modules={[Virtual]}
      effect="fade"
      spaceBetween={30}
      slidesPerView={4}
      virtual
      style={{ padding: "10px" }}
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
      {brandImages.map((item, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4">
            <img
              className="d-block mx-auto"
              src={item}
              style={{ width: "150px" }}
              alt="Brand"
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
