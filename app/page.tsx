import React from "react";
import HeroSection from "./components/HeroSection";

function App(): React.JSX.Element {
  return (
    <div className="w-screen min-h-screen h-screen flex flex-col">
      <div className="h-24 w-full"></div>
      <HeroSection />
    </div>
  );
}

export default App;
