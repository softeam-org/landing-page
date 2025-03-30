"use client";
import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import "./timeline.css";

interface Etapa {
  icon: string;
  icon2: string;
  label: string;
  dateI: string;
  dateF: string;
  class: string;
  class2: string;
}

const etapas: Etapa[] = [
  { 
    icon: "/check-mark.png", 
    icon2: "/checkEnd.png", 
    label: "Inscricao", 
    dateI: "01/01/2025", 
    dateF: "01/02/2025", 
    class: "img_check", 
    class2: "img_checkend" 
  },
  { 
    icon: "/check-mark.png", 
    icon2: "/checkEnd.png", 
    label: "Inscricao", 
    dateI: "05/02/2025", 
    dateF: "30/03/2025", 
    class: "img_check", 
    class2: "img_checkend" 
  },
  { 
    icon: "/check-mark.png", 
    icon2: "/checkEnd.png", 
    label: "Inscricao", 
    dateI: "01/03/2025", 
    dateF: "30/04/2025", 
    class: "img_check", 
    class2: "img_checkend" 
  },
  { 
    icon: "/check-mark.png", 
    icon2: "/checkEnd.png", 
    label: "Inscricao", 
    dateI: "01/03/2025", 
    dateF: "30/04/2025", 
    class: "img_check", 
    class2: "img_checkend" 
  },
  { 
    icon: "/check-mark.png", 
    icon2: "/checkEnd.png", 
    label: "Inscricao", 
    dateI: "01/03/2025", 
    dateF: "30/04/2025", 
    class: "img_check", 
    class2: "img_checkend" 
  },
  
  
];

const isDateBeforeToday = (dateString: string): boolean => {
  const today = new Date();
  const [day, month, year] = dateString.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  return date < today;
};

function Timeline(): ReactElement {
  const [progressWidth, setProgressWidth] = useState<number>(0);
  
  useEffect(() => {
    const calculateProgress = () => {
      const completedStages = etapas.filter(etapa => isDateBeforeToday(etapa.dateF)).length;
      
      if (completedStages === 0) {
        setProgressWidth(0);
        return;
      }

      // Calcula a largura baseada no número real de etapas
      const totalStages = etapas.length;
      const segmentWidth = 100 / (totalStages - 1);
      
      // Preenche até o centro do último estágio completo
      let width = (completedStages - 1) * segmentWidth;
      
      // Se não for a última etapa, adiciona metade do segmento
      if (completedStages < totalStages) {
        width += segmentWidth / 2;
      } else {
        width = 100; // Completa se for a última etapa
      }
      
      setProgressWidth(width);
    };

    calculateProgress();
  }, [etapas]); // Adicionei etapas como dependência

  return (
    <div className="timeline_cont">
      <h2 className="text-3xl font-bold font-sans mb-4">Cronograma PSS 2025</h2>
      <div 
        className="timeline"
        style={{ '--progress-width': `${progressWidth}%` } as React.CSSProperties}
      >
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
                <p className="font-bold font-sans">
                  {etapa.dateI} a <br />{etapa.dateF}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;