import React from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const CollectionSwiper = ({ children, ...props }) => {
  return (
    <Swiper
      className="  "
      spaceBetween={5}
      slidesPerView={3}
      modules={[Navigation]}
      navigation={{
        enabled: true,
        disabledClass: "opacity-0",
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        600: {
          slidesPerView: 4,
        },
        750: {
          slidesPerView: 6,
        },
        1100: {
          slidesPerView: 8,
        },
        1500: {
          slidesPerView: 10,
          spaceBetween: 20,
        },
      }}
      {...props}
    >
      {children}

      <BiSolidRightArrow
        className="swiper-button-next text-xl  "
        fill="#494949"
      />

      <BiSolidLeftArrow
        className=" text-xl swiper-button-prev   "
        fill="#494949"
      />
    </Swiper>
  );
};

export default CollectionSwiper;
