"use client";

import { poppins } from "@/app/ts/fonts";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { images } from "../../ts/parternsPNGs";

function Partners(): React.JSX.Element {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <section
      className="relative w-full flex flex-col gap-16 px-44 max-xl:px-36 max-lg:px-16 max-md:px-10 max-xs:px-14
      py-12 bg-color-5"
    >
      <h2 className={`text-3xl text-center font-semibold ${poppins.className}`}>Nossos Parceiros</h2>
      <div className="relative">
        <div className="absolute z-30 flex justify-between h-64 w-full">
          <div className="h-full w-10 bg-gradient-to-r from-color-5 from-20% to-transparent"></div>
          <div className="h-full w-10 bg-gradient-to-l from-color-5 from-20% to-transparent"></div>
        </div>
        <Slider {...settings} className="z-20 flex w-full h-64">
          {images.map((src, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image src={src} className="object-cover w-64 aspect-square" alt={`Parceiro ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Partners;
