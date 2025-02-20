import { openSans, poppins } from "@/app/ts/fonts";
import React from "react";
import { AiOutlineAlert } from "react-icons/ai";
import { FaHandHoldingHeart, FaRegCalendarCheck } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { PiCastleTurret, PiHandFist, PiSunHorizonDuotone, PiTarget } from "react-icons/pi";

import MissionVisionCard from "./MissionVision/MissionVisionCard";
import ValueCard from "./Values/ValueCard";

function About(): React.JSX.Element {
  return (
    <section
      className={`w-full flex flex-col gap-16 px-44 max-xl:px-36 max-lg:px-30 py-12 ${poppins.className}
      text-white bg-color-1`}
    >
      {/* Quem Somos */}
      <article className="flex flex-col gap-6">
        <h2 className={`font-bold text-2xl tracking-wide ${openSans.className}`}>QUEM SOMOS</h2>
        <div className="flex flex-col gap-3">
          <p className={"text-lg font-light "}>
            Fundada em 1997, a SofTeam é uma empresa júnior, que entrega soluções digitais abrangendo diversas áreas da
            computação. Composta pelos cursos do Departamento de Computação da Universidade Federal de Sergipe, a
            instituição de ensino mais relevante do estado, buscamos apresentar criatividade e inovação em nossos
            trabalhos, proporcionando soluções de alto valor agregado.
          </p>
          <p className={"text-lg font-light"}>
            Nossos serviços são desenvolvidos pensando no cliente. A partir dos desafios que recebemos, criamos soluções
            que visam trazer o melhor retorno possível.
          </p>
        </div>
      </article>
      {/* Missão/Visão */}
      <article className="grid grid-cols-2 items-stretch justify-items-center">
        <MissionVisionCard
          misVisName="MISSÃO"
          misVisText="Formar profissionais diferenciados e líderes preparados,
            viabilizando soluções tecnológicas inovadoras e acessíveis, que
            impulsionam o crescimento de nossos clientes e transformam o mercado."
          misVisIcon={PiTarget}
        />
        <MissionVisionCard
          misVisName="VISÃO"
          misVisText="Consolidar a SofTeam como líder em desenvolvimento tecnológico
            no MEJ, oferecendo soluções modernas e acessíveis, enquanto cultivamos líderes
            preparados para transformar o mercado."
          misVisIcon={PiSunHorizonDuotone}
        />
      </article>
      <article>
        <p className="text-center text-lg">Nossos serviços são desenvolvidos pensando no cliente.</p>
        <p className="text-center">
          A partir dos desafios que recebemos, criamos soluções que visam trazer o melhor retorno possível.
        </p>
      </article>
      <article className="flex flex-col gap-10">
        <h3 className="text-2xl text-center font-semibold">VALORES</h3>
        <div className="grid grid-cols-3 min-w-80 items-stretch gap-10 max-xl:gap-9">
          <ValueCard valueIcon={FaHandHoldingHeart} valueName="Paixão pelo que fazemos" />
          <ValueCard valueIcon={FaRegCalendarCheck} valueName="Compromisso com resultados" />
          <ValueCard valueIcon={AiOutlineAlert} valueName="Autocrítica com nossas soluções" />
          <ValueCard valueIcon={HiUserGroup} valueName="União entre a equipe" />
          <ValueCard valueIcon={PiHandFist} valueName="Garra para encarar desafios" />
          <ValueCard valueIcon={PiCastleTurret} valueName="Se divertir para criar" />
        </div>
      </article>
    </section>
  );
}
export default About;
