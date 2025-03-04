import React from "react";
import Head from "next/head";
import About from "./components/About/About";
import Footer from "./components/footer/footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/index";

const title = "Softeam"
const description = "Somos uma empresa júnior de software especializada em desenvolvimento web, mobile e consultoria tecnológica. Transformamos ideias em soluções inovadoras. Entre em contato!";
const imgLogo = "/logo-softeam.svg";
const URLSite = "https://softeam.com.br";

function App(): React.JSX.Element {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewpoint" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />


        {/* Open Graph (Instagram, WhatsApp,Linkedin) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imgLogo} />
        <meta property="og:url" content={URLSite} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imgLogo} />

        <link rel="canonical" href={URLSite} />
      </Head>

      <Navbar />
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
