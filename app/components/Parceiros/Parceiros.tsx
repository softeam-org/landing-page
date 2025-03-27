"use client";

import { poppins } from "@/app/ts/fonts";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../../ts/parternsPNGs";

function Partners(): React.JSX.Element {
  return (
    <section
      className="w-full flex flex-col gap-16 px-44 max-xl:px-36 max-lg:px-16 max-md:px-10 max-xs:px-14
      py-12 bg-color-5"
    >
      <h3 className={`text-2xl text-center font-semibold ${poppins.className}`}>NOSSOS PARCEIROS</h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, FreeMode]}
        navigation
        freeMode={true}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 300, disableOnInteraction: false, pauseOnMouseEnter: false }}
        loop={true}
        speed={3000}
        className="flex w-1/2 h-64 rounded-lg "
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-center">
            <Image
              src={src}
              className="swiper-lazy object-cover w-64 absolute inset-0 m-auto aspect-square rounded-full"
              alt={`Parceiro ${index + 1}`}
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Partners;
