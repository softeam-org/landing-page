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
import Waves from "../HeroSection/waves/Waves";
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
    <section id="catalogo" className={`w-full flex flex-col gap-16 text-white ${poppins.className} bg-color-4`}>
      <div>
        <Waves
          fill="#114e7e"
          bg="bg-color-1"
          hClass="h-36 max-md:h-32"
          d="M0,96L34.3,96C68.6,96,137,96,206,112C274.3,128,343,160,411,
          186.7C480,213,549,235,617,229.3C685.7,224,754,192,823,170.7C891.4,
          149,960,139,1029,138.7C1097.1,139,1166,149,1234,138.7C1302.9,128,
          1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,
          320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,
          320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,
          320,69,320,34,320L0,320Z"
        />
      </div>
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
