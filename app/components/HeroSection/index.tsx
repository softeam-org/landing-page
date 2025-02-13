import { Open_Sans, Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import lamp from "../../../assets/lamp.png";
import softeamLogo from "../../../assets/logo-softeam.svg";

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
    <main className="w-full h-full flex flex-col bg-color-3">
      <section className="w-full h-full px-32 flex flex-col">
        <div className="w-full h-full flex items-center justify-between">
          <div className={`text-white text-7xl flex flex-col gap-y-1 ${poppins.className}`}>
            <article className="flex gap-x-3">
              <p>Nós</p>
              <p className="font-bold">transformamos</p>
            </article>
            <article className="flex gap-3">
              <p>suas</p>
              <Image alt="softeam-logo" src={lamp} />
              <p className="font bold">ideias</p>
              <p>em</p>
            </article>
            <p className="font-bold mb-3">realidade</p>
            <p className={`w-2/3 text-2xl font-medium tracking-wider ${openSans.className}`}>
              Desenvolvemos soluções de qualidade com o maior custo benefício do mercado para fazer seu projeto decolar!
            </p>
          </div>
          <Image alt="softeam-logo" src={softeamLogo} className="w-auto h-1/2" />
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
