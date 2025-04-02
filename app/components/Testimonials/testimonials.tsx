"use client";

import { poppins } from "@/app/ts/fonts";
import { atom } from "jotai";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { testimonials } from "@/app/ts/testimonials";

export const currentTestimonialAtom = atom<number>(0);

function Testimonials(): React.JSX.Element {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className={`w-full flex flex-col gap-16 text-white ${poppins.className} bg-color-4 py-12`}>
      <h2 className="text-3xl text-center font-semibold">O que nossos clientes dizem</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={false}
        className="w-full h-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-center">
            <blockquote className="text-xl italic text-center max-w-[1000px] mx-auto p-8">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            <p className="text-lg font-semibold mt-4 text-center p-4">{testimonial.name}</p>
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
    </section>
  );
}

export default Testimonials;
