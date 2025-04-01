import { servicesList } from "@/app/ts/servicesList";
import { useAtom } from "jotai";
import React from "react";
import { SwiperClass } from "swiper/react";
import { currentServiceAtom } from "./Servicos";

function ServicosNav({ swiperRef }: { swiperRef: React.RefObject<SwiperClass | null> }): React.JSX.Element {
  const [currentService] = useAtom(currentServiceAtom);

  return (
    <nav>
      <ul
        className="flex w-full h-12 justify-between items-center
          px-44 max-xl:px-36 max-lg:px-16 max-md:px-10 max-xs:px-14"
      >
        {servicesList.map((service, index) => {
          return (
            <li
              key={index}
              className={`flex justify-center items-center rounded-full h-full w-28 text-sm font-semibold
              text-white ${currentService === index ? "bg-color-3" : "hover:bg-color-3 opacity-70"}
                ease-out duration-200 cursor-pointer`}
              onClick={() => swiperRef.current?.slideToLoop(index)}
            >
              {service.serviceTitle}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default ServicosNav;
