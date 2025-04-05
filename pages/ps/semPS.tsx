import React, { ReactElement } from "react";

import "@/styles/ps.css";
import "@/styles/globals.css";

function SemPS(): ReactElement {
  return (
    <div className="ps_container mb-50px">
      <div className="content flex flex-col">
        <div className="">
          <h1 className="text-6xl font-bold font-sans leading-tight">Não há processo seletivo aberto no momento.</h1>
          <p className="font-bold text-3xl font-sans leading-relaxed compact-text">
            Fique atento às nossas redes sociais! Assim que houver uma nova oportunidade, avisaremos por lá. Enquanto
            isso, aproveite nosso conteúdo — temos muitas postagens interessantes para você.
          </p>
        </div>
        <div className="ps_div_img">
          <div className="ps_img"></div>
        </div>
      </div>

      <h2 className="text-4xl font-bold font-sans text-center mb-20 mt-5">Sinta-se abraçado pela SofTeam!</h2>
    </div>
  );
}
export default SemPS;
