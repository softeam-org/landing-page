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
          px-44 max-xl:px-36 max-lg:px-16 max-md:px-10 max-xs:px-7"
      >
        {servicesList.map((service, index) => {
          return (
            <li
              key={index}
              className={`flex justify-center items-center h-full max-xs:h-5/6
              w-32 max-sm:w-auto rounded-3xl
              ${servicesList.length > 3 ? "max-sm:aspect-square max-sm:rounded-full" : ""}
              text-sm font-semibold text-white
              ${currentService === index ? "bg-color-3" : "hover:bg-color-3 opacity-70"}
              ease-out duration-200 cursor-pointer`}
              onClick={() => swiperRef.current?.slideToLoop(index)}
            >
              <span className="sm:hidden">{servicesList.length > 3 ? index + 1 : service.serviceTitle}</span>
              <span className="hidden sm:block">{service.serviceTitle}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default ServicosNav;
