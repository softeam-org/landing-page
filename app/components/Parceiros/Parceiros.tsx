"use client";

import { poppins } from "@/app/ts/fonts";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { images } from "../../ts/partnersPNGs";

function Partners(): React.JSX.Element {
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;

    if (!sliderContainer) return;

    const minimumSlideWidth = 280;
    const resizeObserver = new ResizeObserver(([entry]) => {
      const availableSlides = Math.floor(entry.contentRect.width / minimumSlideWidth);
      const nextSlidesToShow = Math.max(1, Math.min(images.length, availableSlides));

      setSlidesToShow(nextSlidesToShow);
    });

    resizeObserver.observe(sliderContainer);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <section
      id="parceiros"
      className="relative w-full flex flex-col gap-16 px-44 max-xl:px-36 max-lg:px-16 max-md:px-8 max-xs:px-0
      py-12 bg-color-1 pt-32"
    >
      <h2 className={`text-3xl text-center font-semibold text-white ${poppins.className}`}>Nossos Parceiros</h2>
      <div ref={sliderContainerRef} className="relative flex justify-center items-center">
        <div className="absolute z-30 flex justify-between items-center h-64 w-full">
          <div className="h-full w-10 bg-gradient-to-r from-color-1 from-50% to-transparent"></div>
          <div className="h-full w-10 bg-gradient-to-l from-color-1 from-50% to-transparent"></div>
        </div>
        <Slider {...settings} className="z-20 flex w-full h-64">
          {images.map((src, index) => (
            <div key={index} className="flex flex-col h-64 w-32 aspect-auto items-center justify-center">
              <Image
                src={src}
                width={150}
                height={150}
                className="object-contain w-1/2 h-full"
                alt={`Parceiro ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Partners;
