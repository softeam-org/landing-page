import React from "react";
import Head from "next/head";
import Footer from "@/app/components/footer/footer";

import "./globals.css";

export default function MateriaisPage(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Materiais do Curso | Softeam</title>
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Acesse os slides e recursos complementares utilizados no curso introdutório de computação promovido pela Softeam."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://softeam.com.br/minicurso-25" />
      </Head>

      <main className="min-h-[calc(100vh-160px)] bg-color-1 text-white px-6 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Materiais do Curso</h1>
          <p className="text-lg md:text-xl mb-12">
            Abaixo você encontra os slides apresentados e links complementares usados no curso introdutório de
            computação da Softeam.
          </p>

          <ul className="text-left inline-block space-y-4 text-lg">
            <li>
              📑{" "}
              <a
                href="https://drive.google.com/file/d/1KLMF2XUPaIZzH22zmq8DqB2y4fiKzpxZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Slides – Aula 1: Introdução a Computação e Lógica Computacional
              </a>
            </li>
            <li>
              📑{" "}
              <a
                href="https://drive.google.com/file/d/18Tb3A0VpbZlCqDDS8IhlAVOMbaYIZVdG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Slides – Aula 2: Programas, linguagens e programação
              </a>
            </li>
            <li>
              📑{" "}
              <a
                href="https://drive.google.com/file/d/1oCgIiHrX-Rbq2lz3a45c1ZWpMpHI-B_-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Slides – Aula 3: Memória
              </a>
            </li>
            <li>
              🔗{" "}
              <a
                href="https://github.com/softeam-org/desafio-minicurso"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Desafio - Zig-Zag
              </a>
            </li>
          </ul>

          <p className="mt-10 text-base md:text-lg">
            Dúvidas?{" "}
            <a href="mailto:contato@softeam.com.br" className="underline hover:text-gray-300">
              Fale com a gente
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
