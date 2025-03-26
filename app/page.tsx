import { Metadata } from "next";
import Head from "next/head";
import React from "react";
import About from "./components/About/About";
import Footer from "./components/footer/footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/index";
import Parceiros from "./components/Parceiros/Parceiros";

const title = "Softeam - Empresa Júnior de Computação";
const description =
  "A SofTeam é a empresa júnior de computação da UFS, especializada no desenvolvimento de sites, sistemas e aplicativos. Oferecemos soluções tecnológicas inovadoras, acessíveis e personalizadas para impulsionar o crescimento do seu negócio. Solicite um orçamento agora!";
const imgLogo = "/logo-softeam.png"; // Make sure this is a valid PNG/JPG image
const URLSite = "https://softeam.com.br";
const keywords =
  "empresa júnior, desenvolvimento web, mobile, consultoria tecnológica, softeam, tecnologia, website, site, software, desenvolvimento, inovação, soluções, ideias, transformação, contato, sistema, sistemas";

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
    type: "website",
    siteName: "Softeam",
    url: URLSite,
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
  },
  robots: "index, follow",
};

function App(): React.JSX.Element {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords} />

        {/* Open Graph (Instagram, WhatsApp, LinkedIn) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imgLogo} />
        <meta property="og:url" content={URLSite} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Softeam" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imgLogo} />

        {/* Canonical Link */}
        <link rel="canonical" href={URLSite} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Navbar />
      <HeroSection />
      <About />
      <Parceiros />
      <Footer />
    </div>
  );
}

export default App;
