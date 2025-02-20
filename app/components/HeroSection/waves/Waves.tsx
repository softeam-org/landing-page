import React from "react";
import Wave from "./Wave";
import "./waves.css";

interface WavesProps {
  d: string;
  fill: string;
  bg?: string;
  hClass: string;
}

function Waves({ d, fill, bg, hClass }: WavesProps): React.JSX.Element {
  // JavaScript object to style the waves:
  const waveStyle: React.CSSProperties = {
    top: "0",
    fill: fill,
    width: "100%",
    height: "100%",
  };

  // Function to calculate each wave opacity based on its index and waves quantity:
  const calculateWaveOpacity = (index: number, totalWaves: number): number => {
    let opacity = 1;
    const decrement = totalWaves <= 4 ? 0.2 : 0.8 / totalWaves;
    for (let i = 0; i < index; i++) {
      opacity -= decrement;
    }
    return opacity;
  };

  const arr = new Array(4).fill(0);

  return (
    <div className={`relative flex items-start ${hClass}  overflow-hidden ${bg ? bg : ""}`} style={{ width: "150vw" }}>
      {arr.map((value, index: number) => {
        const opcty = calculateWaveOpacity(index, 4);
        return <Wave key={index} opcty={opcty} waveStyle={waveStyle} d={d} />;
      })}
    </div>
  );
}

export default Waves;
