import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Image from "next/image";
import  Footer  from "./components/footer/footer";

  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <div className="w-full h-24 fixed"></div>
      <HeroSection />
    </div>
    
    
    <Footer />
  );
}

export default App;
