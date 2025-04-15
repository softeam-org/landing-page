import React, { ReactElement } from "react";
import Image from "next/image";

import "@/styles/ps.css";
import "@/styles/globals.css";

import Timeline from "./timeline/timeline";

import data from "@/public/psel.json";

const nucleos = data.nucleos;

const cronograma = data.cronograma;

function PS(): ReactElement {
  return (
    <div className="ps_container">
      <div className="content">
        <div className="text">
          <h1 className="titulo text-6xl font-bold font-sans leading-tight">{data.titulo}</h1>
          <p className="font-bold font-sans leading-relaxed compact-text">{data.bodytitulo}</p>
        </div>
        <div className="ps_div_img">
          <div className="ps_img">
            <Image src="/ps.jpeg" alt="Processo Seletivo" width={1920} height={1080} loading="lazy" />
          </div>
        </div>
      </div>

      <div className="text2">
        <h2 className="text-4xl font-bold font-sans">Por que entrar na SofTeam?</h2>
        <p>
          {data.descricao.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>

      <div className="content2">
        <div className="info_edital">
          <div className="info_ps">
            <h2 className="text-4xl font-bold font-sans mb-4">{data.faqtitle}</h2>
            {data.faq.map((question, index) => (
              <div className="info mb-6" key={index}>
                <div className="psiconInfo mb-2">
                  <Image src={question.icon} alt={question.title} width={20} height={20} loading="lazy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{question.title}</h3>
                  <p>{question.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="info_ps">
            <h2 className="text-4xl font-bold font-sans mb-4">{data.oportunidadestitle}</h2>
            {data.oportunidades.map((opportunity, index) => (
              <div className="info mb-4" key={index}>
                <p>{opportunity.text}</p>
              </div>
            ))}
          </div>
          <div className="edital">
            <h2 className="text-4xl font-bold font-sans mb-4 pt-20">Edital</h2>
            <a className="btn-edital" target="_blank">
              Acessar Edital
            </a>
          </div>
        </div>
        <div className="content3">
          <div className="nucleos">
            <h2 className="text-3xl font-bold font-sans mb-4">Núcleos</h2>

            {nucleos.map((nucleo, index) => (
              <div key={index}>
                <div className="border-t border-blue-500 my-2"></div>

                <div className="info flex items-center gap-2">
                  <div className="psiconInfo">
                    <Image src={nucleo.icon} alt={nucleo.text} width={20} height={20} loading="lazy" />
                  </div>
                  <p>{nucleo.text}</p>
                </div>
              </div>
            ))}

            <div className="border-t border-blue-500 my-2"></div>
          </div>

          <div className="cronograma w-full max-w-lg mx-auto">
            <h2 className="text-3xl font-bold font-sans mb-4">Cronograma</h2>

            <div className="grid grid-cols-2 font-bold py-2">
              <div className="text-left text-2xl">Etapa</div>
              <div className="text-left text-2xl">Data</div>
            </div>

            {cronograma.map((item, index) => (
              <div key={index}>
                <div className="border-t border-blue-500"></div>

                <div className="grid grid-cols-2 py-2">
                  <div className="text-left">{item.etapa}</div>
                  <div className="text-left">{item.data}</div>
                </div>
              </div>
            ))}

            <div className="border-t border-blue-500 my-2"></div>
          </div>
        </div>
      </div>
      <Timeline />
    </div>
  );
}
export default PS;
