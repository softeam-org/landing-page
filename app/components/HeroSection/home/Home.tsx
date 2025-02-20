import { openSans, poppins } from "@/app/ts/fonts";
import Image from "next/image";
import React from "react";
import lamp from "../../../../assets/lamp.png";
import softeamLogo from "../../../../assets/logo-softeam.svg";

function Home(): React.JSX.Element {
  return (
    <section
      className="w-full h-fit px-32 max-xl:px-16 max-lg:px-10 max-md:px-6 flex flex-col max-xl:mb-12 max-lg:my-10
        max-md:mt-16 max-md:mb-6 max-sm:my-16 max-xs:mt-20"
    >
      <div className="w-full flex items-center justify-between">
        <article
          className={`${poppins.className} text-white text-7xl max-xl:text-6xl max-lg:text-5xl max-xs:text-3xl
          max-xxs:text-2xl flex flex-col gap-y-1 max-lg:gap-y-2 max-md:items-center`}
        >
          <div className="flex gap-x-3 max-md:justify-center">
            <p>Nós</p>
            <p className="font-bold">transformamos</p>
          </div>
          <div className="flex gap-3 max-md:justify-center items-center">
            <p>suas</p>
            <Image alt="lamp" src={lamp} className="max-lg:h-14 max-lg:w-auto" />
            <p className="font bold">ideias</p>
            <p>em</p>
          </div>
          <p className="font-bold mb-3 max-md:text-6xl max-sm:text-5xl">realidade</p>
          <p
            className={`${openSans.className} w-2/3 max-md:w-5/6 text-2xl max-xl:text-xl max-md:text-lg max-sm:text-base
            font-medium tracking-wider max-md:text-center`}
          >
            Desenvolvemos soluções de qualidade com o maior custo benefício do mercado para fazer seu projeto decolar!
          </p>
        </article>
        <Image alt="softeam-logo" src={softeamLogo} className="w-2/5 md:w-1/3 h-auto max-md:hidden" />
      </div>
    </section>
  );
}
export default Home;
