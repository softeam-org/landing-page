import Head from "next/head";
import React from "react";
import BodyWrapper from "./BodyWrapper";
import About from "@/app/components/About/About"; // Adjusted path to match the correct file structure
import Footer from "@/app/components/footer/footer";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Navbar from "@/app/components/Navbar/index";
import Partners from "@/app/components/Parceiros/Parceiros";
import Services from "@/app/components/Servicos/Servicos";
import Waves from "@/app/components/HeroSection/waves/Waves";
import Testimonials from "@/app/components/Testimonials/testimonials";

import "@/styles/globals.css";

const title = "Softeam - Empresa Júnior de Computação";
const description =
  // eslint-disable-next-line max-len
  "A SofTeam é a empresa júnior de computação da UFS, especializada no desenvolvimento de sites, sistemas e aplicativos. Oferecemos soluções tecnológicas inovadoras, acessíveis e personalizadas para impulsionar o crescimento do seu negócio. Solicite um orçamento agora!";
const imgLogo = "/logo-softeam.png"; // Make sure this is a valid PNG/JPG image
const URLSite = "https://softeam.com.br";
const keywords =
  // eslint-disable-next-line max-len
  "empresa júnior, desenvolvimento web, mobile, consultoria tecnológica, softeam, tecnologia, website, site, software, desenvolvimento, inovação, soluções, ideias, transformação, contato, sistema, sistemas";

function App(): React.JSX.Element {
  return (
    <BodyWrapper>
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
      <Services />
      <Partners />
      <Testimonials />

      <Waves
        fill="#072763"
        bg="bg-color-4"
        hClass="h-36 max-md:h-32"
        d="M0,96L34.3,96C68.6,96,137,96,206,112C274.3,128,343,160,411,
          186.7C480,213,549,235,617,229.3C685.7,224,754,192,823,170.7C891.4,
          149,960,139,1029,138.7C1097.1,139,1166,149,1234,138.7C1302.9,128,
          1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,
          320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,
          320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,
          320,69,320,34,320L0,320Z"
      />
      <Footer />
    </BodyWrapper>
  );
}

export default App;
