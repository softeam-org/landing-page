"use client";

import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "./ParceiroComponent";

function Partners(): React.JSX.Element {
  return (
    <section
      className="w-full flex flex-col gap-16 px-44 max-xl:px-36 max-lg:px-16 max-md:px-10 max-xs:px-14
      py-12"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, FreeMode]}
        navigation
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={10}
        autoplay={{ delay: 100, disableOnInteraction: false, pauseOnMouseEnter: false }}
        loop={true}
        speed={2000}
        className="w-full max-w-3xl h-64"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <Image src={src} className="swiper-lazy object-cover w-full h-full" alt={`Parceiro ${index + 1}`} />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Partners;
