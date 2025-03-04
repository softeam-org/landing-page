import React from "react";
import Head from "next/head";
import About from "./components/About/About";
import Footer from "./components/footer/footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/index";
import { Metadata } from "next";

const title = "Softeam - Empresa Júnior de Computação";
const description =
  "Softeam é uma empresa júnior especializada em desenvolvimento web, mobile e consultoria tecnológica, transformando ideias em soluções inovadoras. Entre em contato!";
const imgLogo = "/logo-softeam.png";  // Make sure this is a valid PNG/JPG image
const URLSite = "https://softeam.com.br";
const keywords = "empresa júnior, desenvolvimento web, mobile, consultoria tecnológica, softeam";

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
      <Footer />
    </div>
  );
}

export default App;
