import React from "react";
import Footer from "./components/footer/footer";
import HeroSection from "./components/HeroSection/HeroSection";

function App(): React.JSX.Element {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <div className="w-full h-24 fixed"></div>
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
