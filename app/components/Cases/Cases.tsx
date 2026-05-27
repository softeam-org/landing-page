"use client";

import { poppins } from "@/app/ts/fonts";
import { PROJECTS_COUNT, YEARS_OF_EXPERIENCE } from "@/app/ts/casesList";
import Image from "next/image";
import React from "react";

interface CasesProps {
  caseImages: string[];
}

function Cases({ caseImages = [] }: CasesProps): React.JSX.Element {
  return (
    <section
      id="cases"
      className={`w-full flex flex-col gap-16 px-44 max-xl:px-36 max-lg:px-16 max-md:px-8
      py-16 bg-color-1 ${poppins.className}`}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-color-5 text-lg font-medium uppercase tracking-widest">Cases de Sucesso</p>
        <h2 className="text-5xl max-md:text-4xl font-bold text-white">
          Mais de <span className="text-color-5">{PROJECTS_COUNT} projetos</span> realizados
        </h2>
        <p className="text-white/70 text-lg max-w-xl">
          Ao longo de {YEARS_OF_EXPERIENCE} anos transformando ideias em soluções tecnológicas para empresas e
          instituições de todo o Brasil.
        </p>
      </div>

      {caseImages.length > 0 && (
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center items-center gap-8 max-md:gap-6">
            {caseImages.map((src, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-36 h-20 max-md:w-28 max-md:h-16
                bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
              >
                <Image
                  src={src}
                  width={120}
                  height={60}
                  className="object-contain w-full h-full filter brightness-0 invert opacity-80
                  hover:opacity-100 transition-opacity"
                  alt={`Cliente ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <p className="text-white/50 text-lg font-medium">e muito mais...</p>
        </div>
      )}
    </section>
  );
}

export default Cases;
