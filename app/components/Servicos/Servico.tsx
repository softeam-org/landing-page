import { poppins } from "@/app/ts/fonts";
import { useAtom } from "jotai";
import React from "react";
import { isServicePopupOpenAtom } from "./Servicos";

function Servico(): React.JSX.Element {
  const [, setIsServicePopupOpen] = useAtom(isServicePopupOpenAtom);

  return (
    <>
      <div className="w-full grid grid-cols-2 gap-10 px-44 max-xl:px-36 max-lg:px-16 max-md:px-10 max-xs:px-14">
        <div className="h-96 bg-white rounded-3xl"></div>
        <article className="flex flex-col gap-10">
          <div className={`${poppins.className}`}>
            <h3 className="font-bold text-xl tracking-wide">Projeto de Software</h3>
            <h3 className="font-bold text-xl tracking-wide">Voltado para solucionar problema</h3>
          </div>
          <div className="font-semibold">
            <p className="font-semibold">O melhor custo benefício do mercado!</p>
            <p className="font-semibold">
              Aqui vai uma breve descrição deste projeto. Pode obter muitas coisas legais.
            </p>
            <p className="font-semibold">Conheça mais agora.</p>
          </div>
          <button
            type="button"
            className="h-14 w-52 font-semibold text-color-3 hover:bg-color-3 hover:text-white
            rounded-full border-color-3 border-3 ease-out duration-200"
            onClick={() => setIsServicePopupOpen(true)}
          >
            Comece agora
          </button>
        </article>
      </div>
    </>
  );
}

export default Servico;
