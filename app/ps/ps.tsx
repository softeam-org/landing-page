import React, { ReactElement } from "react";

import "./ps.css";

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
                <div className="edital">
                    <h2>Processo Seletivo 2025.1</h2>
                    
                </div>
                <div className="content3">

                    <div className="nucleos">
                        <h2>Nucleos</h2>
                    </div>
                    <div className="cronograma">
                    '<h2>Cronograma</h2>
                    </div>

                </div>
                
            </div>

            <div className="timeline">
                
            </div>

            
            
        </div>
    )
}
export default PS;