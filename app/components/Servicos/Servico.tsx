import { poppins } from "@/app/ts/fonts";
import { Service } from "@/app/ts/servicesList";
import { useAtom } from "jotai";
import React from "react";
import { currentOpenServicePopupOpenAtom, isServicePopupOpenAtom } from "./Servicos";
import Image from "next/image";

function Servico({ service }: { service: Service }): React.JSX.Element {
  const [, setIsServicePopupOpen] = useAtom(isServicePopupOpenAtom);
  const [, setCurrentOpenServicePopupOpenAtom] = useAtom(currentOpenServicePopupOpenAtom);

  const handlePopupOpen = (): void => {
    setIsServicePopupOpen(true);
    setCurrentOpenServicePopupOpenAtom(service.id);
  };

  return (
    <div
      className="relative w-full h-full min-h-96 grid grid-cols-2 max-sm:flex gap-10 max max-md:gap-8
      max-sm:gap-0 max-sm:gap-x-4 ma px-44 max-xl:px-36 max-lg:px-16 max-md:px-10 max-xs:px-7
    text-white max-sm:text-center"
    >
      <Image
        src={service.serviceCardImage}
        alt="mockup"
        className="h-full w-full object-cover bg-black rounded-3xl max-sm:hidden"
      />
      <article className="flex h-full max-sm:h-1/2 flex-col gap-10 max-sm:items-center">
        <div className={`${poppins.className}`}>
          <h3 className="font-bold text-xl tracking-wide">{service.serviceTitle}</h3>
          <h3 className="text-l tracking-wide italic">{service.serviceSubtitle}</h3>
        </div>
        <div className="font-semibold">
          <p className="font-semibold">{service.serviceDescription}</p>
        </div>
        <button
          type="button"
          className="h-14 w-52 font-semibold text-white hover:bg-color-5
          hover:text-black rounded-full border-color-5 border-3 ease-out duration-200"
          onClick={() => handlePopupOpen()}
        >
          Comece agora
        </button>
      </article>
    </div>
  );
}

export default Servico;
