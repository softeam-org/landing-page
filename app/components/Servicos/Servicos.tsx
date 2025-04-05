"use client";

import { poppins } from "@/app/ts/fonts";
import { servicesList } from "@/app/ts/servicesList";
import { atom, useAtom } from "jotai";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import PopupServico from "./PopupServico";
import Servico from "./Servico";
import ServicosNav from "./ServicosNav";

export const currentServiceAtom = atom<number>(0);
export const currentOpenServicePopupOpenAtom = atom<number>(0);
export const isServicePopupOpenAtom = atom<boolean>(false);

export const services: number[] = [0, 1, 2, 3, 4, 5];

function Services(): React.JSX.Element {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isServicePopupOpen] = useAtom(isServicePopupOpenAtom);
  const [, setCurrentService] = useAtom(currentServiceAtom);

  return (
    <section id="catalogo" className={`w-full flex flex-col gap-16 text-white ${poppins.className} bg-color-1`}>
      <h2 className="text-3xl text-center font-semibold">Nossos Serviços</h2>
      <ServicosNav swiperRef={swiperRef} />
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentService(swiper.realIndex)}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={false}
        className="w-full h-full"
      >
        {servicesList.map((service, index) => (
          <SwiperSlide key={index} className="h-full">
            <Servico service={service} />
          </SwiperSlide>
        ))}

        <div
          className="custom-prev absolute top-1/2 left-8 max-lg:left-4 transform max-md:hidden
          -translate-y-1/2 bg-color-3 text-white w-8 h-8 flex items-center
          justify-center rounded-full cursor-pointer z-10 text-lg"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          {"<"}
        </div>
        <div
          className="custom-next absolute top-1/2 right-8 max-lg:right-4 transform
          max-md:hidden -translate-y-1/2 bg-color-3 text-white w-8 h-8 flex items-center
          justify-center rounded-full cursor-pointer z-10 text-xl"
          onClick={() => swiperRef.current?.slideNext()}
        >
          {">"}
        </div>
      </Swiper>
      {isServicePopupOpen && <PopupServico />}
    </section>
  );
}

export default Services;
