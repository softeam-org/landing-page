import { openSans, poppins } from "@/app/ts/fonts";
import React from "react";
import { FaCircle } from "react-icons/fa";

function About(): React.JSX.Element {
  return (
    <section className="w-full min-h-screen flex flex-col gap-12 px-44 pt-12 text-white bg-color-1">
      {/* Quem Somos */}
      <article className="flex flex-col gap-6">
        <h2 className={`font-bold text-2xl tracking-wide ${openSans.className}`}>QUEM SOMOS</h2>
        <div className="flex flex-col gap-3">
          <p className={`text-lg font-light ${poppins.className}`}>
            Fundada em 1997, a SofTeam é uma empresa júnior, que entrega soluções digitais abrangendo diversas áreas da
            computação. Composta pelos cursos do Departamento de Computação da Universidade Federal de Sergipe, a
            instituição de ensino mais relevante do estado, buscamos apresentar criatividade e inovação em nossos
            trabalhos, proporcionando soluções de alto valor agregado.
          </p>
          <p className={`text-lg font-light ${poppins.className}`}>
            Nossos serviços são desenvolvidos pensando no cliente. A partir dos desafios que recebemos, criamos soluções
            que visam trazer o melhor retorno possível.
          </p>
        </div>
      </article>
      {/* Missão/Visão */}
      <article className="flex flex-col items-center gap-10">
        <div className="w-2/5 flex flex-row gap-1">
          <div className="flex flex-col gap-3">
            <h3 className={`text-xl font-bold ${openSans.className}`}>MISSÃO</h3>
            <p className={`text-lg font-light ${poppins.className}`}>
              “Formar profissionais diferenciados e líderes preparados, viabilizando soluções tecnológicas inovadoras e
              acessíveis, que impulsionam o crescimento de nossos clientes e transformam o mercado.”
            </p>
          </div>
          <FaCircle className="w-80 h-fit top-0" />
        </div>
        <div className="w-2/5 flex flex-row-reverse gap-3">
          <div className="flex flex-col gap-3">
            <h3 className={`text-xl font-bold ${openSans.className}`}>VISÃO</h3>
            <p className={`text-lg font-light ${poppins.className}`}>
              “Consolidar a SofTeam como líder em desenvolvimento tecnológico no MEJ, oferecendo soluções modernas e
              acessíveis, enquanto cultivamos líderes preparados para transformar o mercado”.
            </p>
          </div>
          <FaCircle className="w-80 h-fit top-0" />
        </div>
      </article>
    </section>
  );
}
export default About;
