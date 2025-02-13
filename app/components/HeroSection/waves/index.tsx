import React from "react";
import "./Waves.css";

function Wave({ waveStyle, opcty }: { waveStyle: React.CSSProperties; opcty: number }): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 91 1440 320"
      style={{ ...waveStyle, opacity: opcty }}
      className="wave absolute"
    >
      <path
        d="M0,96L80,101.3C160,107,320,117,480,117.3C640,
          117,800,107,960,112C1120,117,1280,139,1360,149.3L1440,
          160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,
          640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
  );
}

function Waves(): React.JSX.Element {
  // JavaScript object to style the waves:
  const waveStyle: React.CSSProperties = {
    top: "0",
    fill: "#0099ff",
    marginBottom: "auto",
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
    <div className="relative flex items-start mt-auto h-40 overflow-hidden" style={{ width: "200vw" }}>
      {arr.map((value, index: number) => {
        const opcty = calculateWaveOpacity(index, 4);
        return <Wave key={index} opcty={opcty} waveStyle={waveStyle} />;
      })}
    </div>
  );
}

export default Waves;
