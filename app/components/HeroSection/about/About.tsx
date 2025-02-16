import React from "react";

function About(): React.JSX.Element {
  return (
    <section className="w-full min-h-screen bg-color-1">
      <article className="text-white">
        <h2>QUEM SOMOS</h2>
        <div>
          <p>
            Fundada em 1997, a SofTeam é uma empresa júnior, que entrega soluções digitais abrangendo diversas áreas da
            computação. Composta pelos cursos do Departamento de Computação da Universidade Federal de Sergipe, a
            instituição de ensino mais relevante do estado, buscamos apresentar criatividade e inovação em nossos
            trabalhos, proporcionando soluções de alto valor agregado.
          </p>
          <p>
            Nossos serviços são desenvolvidos pensando no cliente. A partir dos desafios que recebemos, criamos soluções
            que visam trazer o melhor retorno possível.
          </p>
        </div>
      </article>
    </section>
  );
}
export default About;
