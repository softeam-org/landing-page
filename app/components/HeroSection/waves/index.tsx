import React from "react";
import "./Waves.css";

function Wave({ waveStyle, opcty }: { waveStyle: React.CSSProperties; opcty: number }): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 70 1440 320"
      style={{ ...waveStyle, opacity: opcty }}
      className="wave absolute"
    >
      <path
        d="M0,160L40,144C80,128,160,96,240,101.3C320,107,
          400,149,480,144C560,139,640,85,720,90.7C800,96,880,160,
          960,197.3C1040,235,1120,245,1200,240C1280,235,1360,213,
          1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,
          1200,320C1120,320,1040,320,960,320C880,320,800,320,720,
          320C640,320,560,320,480,320C400,320,320,320,240,320C160,
          320,80,320,40,320L0,320Z"
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
