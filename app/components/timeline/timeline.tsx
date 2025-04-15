"use client";
import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import etapasData from "@/public/psel.json"; // Importação direta do JSON
import "./timeline.css";

const isDateBeforeToday = (dateString: string): boolean => {
  const today = new Date();
  const [day, month, year] = dateString.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  return date < today;
};

function Timeline(): ReactElement {
  const [progressWidth, setProgressWidth] = useState<number>(0);
  const etapas = etapasData.etapas; // Inicializa com os dados importados

  useEffect(() => {
    if (etapas.length === 0) return;

    const calculateProgress = (): number => {
      const completedStages = etapas.filter((etapa) => isDateBeforeToday(etapa.dateF)).length;
      if (completedStages === 0) {
        setProgressWidth(0);
        return 0;
      }

      const totalStages = etapas.length;
      const segmentWidth = 100 / (totalStages - 1);
      let width = (completedStages - 1) * segmentWidth;
      if (completedStages < totalStages) {
        width += segmentWidth / 2;
      } else {
        width = 100;
      }
      setProgressWidth(width);
      return 0;
    };

    calculateProgress();
  }, [etapas]);

  return (
    <div className="timeline_cont">
      <h2 className="text-3xl font-bold font-sans mb-4">Cronograma PSS 2025</h2>
      <div className="timeline" style={{ "--progress-width": `${progressWidth}%` } as React.CSSProperties}>
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
                  {etapa.dateI} a <br />
                  {etapa.dateF}
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
