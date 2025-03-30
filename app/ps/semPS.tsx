import React, { ReactElement } from "react";
import Image from "next/image";
import "./ps.css";


function SemPS(): ReactElement { 
    return (
        <div className="ps_container mb-50px">
            <div className="content flex flex-col">
                <div className="">
                    <h1 className="text-6xl font-bold font-sans leading-tight">
                        Não há Processo Seletivo<br/> no Momento
                    </h1>
                    <p className="font-bold text-3xl font-sans leading-relaxed compact-text">
                        Mas Fique atento em nossas redes sociais,que assim que o processo seletivo
                        estiver aberto estaremos comunicando. Além disso, você pode apreciar nossas postagens,pois tem muito conteudo bom lá!
                    </p>

                </div>
                <div className="ps_div_img">
                    <div className="ps_img"></div>
                </div>

            </div>

            
            <h2 className="text-4xl font-bold font-sans text-center mb-20 mt-5" >Sinta-se abraçado pela SofTeam!</h2>
        </div>
    )
}
export default SemPS;