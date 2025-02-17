import React from "react";

interface WaveProps {
  waveStyle: React.CSSProperties;
  opcty: number;
  d: string;
}

function Wave({ waveStyle, opcty, d }: WaveProps): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{ ...waveStyle, opacity: opcty }}
      preserveAspectRatio="none"
      className="wave absolute"
    >
      <path d={d} className="w-full" />
    </svg>
  );
}

export default Wave;
