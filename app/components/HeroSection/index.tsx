import Image from "next/image";
import React from "react";
import lamp from "../../../assets/lamp.png";

function HeroSection(): React.JSX.Element {
  return (
    <main className="w-full h-full flex flex-col bg-color-3">
      <section className="w-full h-full px-28 flex flex-col">
        <div className="w-full h-4/5">
          <div className="text-white text-5xl flex flex-col gap-y-3">
            <article className="flex gap-x-3">
              <p>Nós</p>
              <p className="font-bold">transformamos</p>
            </article>
            <article className="flex gap-3">
              <p>suas</p>
              <Image alt="softeam-logo" src={lamp} className="w-fit" />
              <p className="font bold">ideias</p>
              <p>em</p>
            </article>
            <p className="font-bold">realidade</p>
          </div>
          {/* <Image alt="softeam-logo" src={softeamLogo} width={34} height={34} /> */}
        </div>
      </section>
    </main>
  );
}
export default HeroSection;
