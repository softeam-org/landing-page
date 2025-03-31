"use client";

import { poppins } from "@/app/ts/fonts";
import { atom, useAtom } from "jotai";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Servico from "./Servico";
import ServicosNav from "./ServicosNav";

export const currentServiceAtom = atom<number>(0);

export const services: number[] = [0, 1, 2, 3, 4, 5];

function Services(): React.JSX.Element {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [, setCurrentService] = useAtom(currentServiceAtom);

  return (
    <section className={`w-full flex flex-col gap-16 py-12 ${poppins.className} bg-color-5`}>
      <h2 className="text-3xl text-center font-semibold">Nossos Serviços</h2>
      <ServicosNav swiperRef={swiperRef} />
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Guarda a instância do Swiper
        onSlideChange={(swiper) => setCurrentService(swiper.realIndex)} // Atualiza o índice do slide atual
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={false}
        className="w-full"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Servico />
          </SwiperSlide>
        ))}

        <div
          className="custom-prev absolute top-1/2 left-8 transform
          -translate-y-1/2 bg-color-3 text-color-5 w-8 h-8 flex items-center
          justify-center rounded-full cursor-pointer z-10 text-lg"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          {"<"}
        </div>
        <div
          className="custom-next absolute top-1/2 right-8 transform
          -translate-y-1/2 bg-color-3 text-color-5 w-8 h-8 flex items-center
          justify-center rounded-full cursor-pointer z-10 text-xl"
          onClick={() => swiperRef.current?.slideNext()}
        >
          {">"}
        </div>
      </Swiper>
    </section>
  );
}

export default Services;
