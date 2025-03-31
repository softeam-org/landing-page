import { useAtom } from "jotai";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import placeholderMockup from "../../../public/image2.png";
import { isServicePopupOpenAtom } from "./Servicos";

interface ServicePopupProps {
  popupName: string;
  popupMockup: StaticImageData;
}

function PopupServico({ popupName, popupMockup }: ServicePopupProps): React.JSX.Element {
  const [, setIsServicePopupOpen] = useAtom(isServicePopupOpenAtom);

  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen
        bg-black bg-opacity-80 z-50"
    >
      <div className="flex flex-col items-center w-1/3 aspect-square bg-white rounded-3xl">
        <div className="flex justify-end items-center w-full h-12 border-b-2 border-slate-200 rounded-t-3xl">
          <button
            type="button"
            className="flex h-full aspect-square justify-center items-center rounded-tr-3xl"
            onClick={() => setIsServicePopupOpen(false)}
          >
            <IoClose className="h-full w-2/3 aspect-square" color="#64748b" />
          </button>
        </div>
        <div className="relative flex-1 flex flex-col w-full  px-10 gap-4 justify-center items-center rounded-b-3xl">
          {/* Mockup do Serviço */}
          <Image src={popupMockup || placeholderMockup} alt="mockup" />
          {/* Título do Serviço */}
          <h1 className="font-semibold text-xl">{popupName || "Lorem Ipsum"}</h1>
          {/* Descrição do Serviço */}
          <h3 className="text-xs text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam ipsum quas nostrum dolor, delectus,
            neque laudantium quibusdam vitae officia veniam architecto, voluptate dolore autem possimus a quod!
          </h3>
          <button
            type="button"
            className="h-10 w-40 text-sm font-semibold absolute bottom-8 text-color-3 hover:bg-color-3 hover:text-white
            rounded-full border-color-3 border-3 ease-out duration-200"
            onClick={() => alert(`Contratado o serviço ${4}.`)}
          >
            Contrate-nos
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupServico;
