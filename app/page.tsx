import React from "react";
import About from "./components/About/About";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/index"

function App(): React.JSX.Element {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">

      <div className="w-full h-24 fixed"></div>
    <Navbar/>

      <HeroSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
