import React, { ReactElement } from "react";
import Image from "next/image";
import "../ps.css";

const etapas = [
    { icon: "/check-mark.png", icon2: "/check-mark.png", label: "Inscricao", dateI: "01/01/2025", dateF: "25/01/2025", class: "img_check", class2: "img_checkend" },
    { icon: "/check-mark.png", icon2: "/check-mark.png", label: "Inscricao", dateI: "01/03/2025", dateF: "30/03/2025", class: "img_check", class2: "img_checkend" },
    { icon: "/check-mark.png", icon2: "/check-mark.png", label: "Inscricao", dateI: "01/03/2025", dateF: "30/03/2025", class: "img_check", class2: "img_checkend" },
    { icon: "/check-mark.png", icon2: "/check-mark.png", label: "Inscricao", dateI: "01/03/2025", dateF: "30/03/2025", class: "img_check", class2: "img_checkend" },
    { icon: "/check-mark.png", icon2: "/check-mark.png", label: "Inscricao", dateI: "01/03/2025", dateF: "30/03/2025", class: "img_check", class2: "img_checkend" }
];

const isDateBeforeToday = (dateString: string): boolean => {
    const today = new Date(); // Data atual
    const [day, month, year] = dateString.split("/"); // Divide a string da data
    const date = new Date(`${year}-${month}-${day}`); // Converte para Date
    return date < today; // Retorna true se a data já passou
};

function Timeline(): ReactElement {
    return (
        <div className="timeline_cont">
            <h2 className="text-3xl font-bold font-sans mb-4">Cronograma PSS 2025</h2>
            <div className="timeline">
                {etapas.map((etapa, index) => {
                    const isCompleted = isDateBeforeToday(etapa.dateF); 
                    return (
                        <div className={`etapa ${isCompleted ? "completed" : ""}`} key={index}>
                            <div className="label">
                                <p className="font-bold font-sans">{etapa.label}</p>
                            </div>
                            <Image
                                className={isCompleted ? etapa.class2 : etapa.class}
                                src={isCompleted ? etapa.icon2 : etapa.icon}
                                alt={etapa.label}
                                width={50}
                                height={50}
                            />
                            <div className="date">
                                <p className="font-bold font-sans">{etapa.dateI} a <br />{etapa.dateF}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Timeline;