import React, { ReactElement } from "react";
import Image from "next/image";

import "./ps.css";
import Timeline from "./timeline/timeline";

const information =[
    { icon: "/check-mark.png", text: "Neste processo seletivo fknalgnfagbkajfbjkadgbkjafgbaljfsgbojwvfjsvb" },
    { icon: "/check-mark.png", text: "Neste processo seletivo fknalgnfagbkajfbjkadgbkjafgbaljfsgbojwvfjsvb" },
    { icon: "/check-mark.png", text: "Neste processo seletivo fknalgnfagbkajfbjkadgbkjafgbaljfsgbojwvfjsvb" }
    
]

const nucleos =[
    { icon: "/check-mark.png", text: "Pojetos" },
    { icon: "/check-mark.png", text: "Pojetos" },
    {icon:"/check-mark.png", text:"Pojetos"}
]

const cronograma = [
    { etapa: "Incricao", data: "01/01/2025-15/01/2025" },
    { etapa: "Desafio em Grupo", data: "01/01/2025-15/01/2025" },
    { etapa: "Incricao", data: "01/01/2025-15/01/2025" }
]




function PS(): ReactElement {
    return (
        <div className="ps_container">
            <div className="content">
                <div className="text">
                    <h1 className="text-6xl font-bold font-sans leading-tight">Faça parte da<br></br>maior empresa<br></br>Júnior de Sergipe</h1>
                    <p className="font-bold font-sans leading-relaxed compact-text">
                        Fundada em 1997, a SofTeam é uma empresa sem fins lucrativos que entrega soluções digitais,
                        abrangendo diversas áreas da computação. Composta pelos cursos do Departamento de Computação
                        da Universidade Federal de Sergipe, tem como um de seus objetivos capacitar e aperfeiçoar o
                        desenvolvimento dos alunos do DCOMP, proporcionando vivência empresarial e a prática com o
                        que há de atual no mercado.
                    </p>

                </div>
                <div className="ps_div_img">
                    <div className="ps_img"></div>
                </div>

            </div>

            <div className="text2">
                    <h2 className="text-4xl font-bold font-sans" >Por que entrar na SofTeam?</h2>
                    <p>
                        Seja entrando em contato e negociando com clientes reais, pondo em prática o que estudou em sala
                    de aula para resolver problemas reais ou aprendendo, na prática, habilidades de gestão, a SofTeam
                    proporciona à estudantes dos cursos do DCOMP a oportunidade de se desenvolver profissionalmente e
                    ir além da grade curricular. Muito mais que isso, a SofTeam oferece proximidade com o mercado e
                    interação com empresas e empresários júniores de diversas áreas e estados.
                    </p>
            </div>
            
            
            <div className="content2">
                <div className="info_edital">
                    
                    <div className="info_ps">
                        <h2 className="text-4xl font-bold font-sans mb-4">Processo Seletivo 2025.1</h2>
                        {information.map((info, index) => (
                                <div className="info mb-4" key={index}>
                                    <div className="iconInfo">
                                    <Image src={info.icon} alt={info.text} width={20} height={20} loading="lazy"/>
                                    </div>
                                    <p>{info.text}</p>
                                </div>
                        ))}
                    </div>
                    <div className="edital">
                        <h2 className="text-4xl font-bold font-sans mb-4">Edital</h2>
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
                                    <div className="iconInfo">
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
            <Timeline/>
            
        </div>
    )
}
export default PS;