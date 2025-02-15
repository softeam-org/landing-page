import { Open_Sans, Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import lamp from "../../../assets/lamp.png";
import softeamLogo from "../../../assets/logo-softeam.svg";
import About from "./about/About";
import Waves from "./waves/Waves";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

function HeroSection(): React.JSX.Element {
  return (
    <main className="w-full min-h-screen flex flex-col pt-32 overflow-x-hidden overflow-y-auto bg-color-3">
      <section className="w-full px-32 flex flex-col">
        <div className="w-full h-full flex items-center justify-between">
          <div className={`text-white text-7xl flex flex-col gap-y-1 ${poppins.className}`}>
            <article className="flex gap-x-3">
              <p>Nós</p>
              <p className="font-bold">transformamos</p>
            </article>
            <article className="flex gap-3">
              <p>suas</p>
              <Image alt="lamp" src={lamp} />
              <p className="font bold">ideias</p>
              <p>em</p>
            </article>
            <p className="font-bold mb-3">realidade</p>
            <p className={`w-2/3 text-2xl font-medium tracking-wider ${openSans.className}`}>
              Desenvolvemos soluções de qualidade com o maior custo benefício do mercado para fazer seu projeto decolar!
            </p>
          </div>
          <Image alt="softeam-logo" src={softeamLogo} className="w-auto h-7/12" />
        </div>
      </section>
      <Waves
        d="M0,64L34.3,96C68.6,128,137,192,206,202.7C274.3,
          213,343,171,411,138.7C480,107,549,85,617,106.7C685.7,128,
          754,192,823,197.3C891.4,203,960,149,1029,144C1097.1,139,
          1166,181,1234,170.7C1302.9,160,1371,96,1406,64L1440,32L1440,
          320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,
          320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,
          320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,
          320,69,320,34,320L0,320Z"
        fill="#114e7e"
      />
      <About />
    </main>
  );
}

export default HeroSection;
