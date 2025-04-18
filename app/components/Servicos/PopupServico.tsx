"use client";

import { servicesList } from "@/app/ts/servicesList";
import placeholderMockup from "@/public/logo-softeam.svg";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { currentOpenServicePopupOpenAtom, isServicePopupOpenAtom } from "./Servicos";

function PopupServico(): React.JSX.Element {
  const [, setIsServicePopupOpen] = useAtom(isServicePopupOpenAtom);
  const [currentOpenServicePopupOpen] = useAtom(currentOpenServicePopupOpenAtom);

  const handleContractCLick = (): void => {
    setIsServicePopupOpen(false);
    window.open("https://wa.me/557981000041", "_blank");
  };

  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen
        bg-black bg-opacity-80 z-50"
    >
      <div
        className="flex flex-col items-center w-2/5 max-xl:w-1/2 max-lg:w-7/12
  max-md:h-2/3 max-sm:w-2/3 max-xs:w-5/6 max-h-[90vh] overflow-y-auto bg-white rounded-3xl"
      >
        <div className="flex justify-end items-center w-full h-12 border-b-2 border-slate-200 rounded-t-3xl">
          <button
            type="button"
            className="flex w-12 h-12 justify-center items-center rounded-tr-3xl"
            onClick={() => setIsServicePopupOpen(false)}
          >
            <IoClose className="w-6 h-6" color="#64748b" />
          </button>
        </div>
        <div className="relative flex-1 flex flex-col w-full p-10 gap-4 justify-between items-center rounded-b-3xl">
          {/* Mockup do Serviço */}
          <Image src={servicesList[currentOpenServicePopupOpen].servicePopupImage || placeholderMockup} alt="mockup" />
          {/* Título do Serviço */}
          <h1 className="font-semibold text-xl">
            {servicesList[currentOpenServicePopupOpen].serviceTitle || "Lorem Ipsum"}
          </h1>
          {/* Descrição do Serviço */}
          <p className="text-sm max-xs:text-xs text-center text-black">
            {servicesList[currentOpenServicePopupOpen].serviceDescription}
          </p>
          <button
            type="button"
            className="h-10 w-40 text-sm font-semibold bottom-8 text-color-3 hover:bg-color-3 hover:text-white
            rounded-full border-color-3 border-3 ease-out duration-200"
            onClick={() => handleContractCLick()}
          >
            Contrate-nos
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupServico;
