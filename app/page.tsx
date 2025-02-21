import React from "react";
import About from "./components/About/About";
import Footer from "./components/footer/footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/index";

function App(): React.JSX.Element {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
