import React, { ReactElement } from "react";
import Navbar from "@/app/components/Navbar";
import PS from "@/app/components/ps/ps";
import SemPS from "@/app/components/semPS/semPS";
import Footer from "@/app/components/footer/footer";
import Head from "next/head";

import data from "@/public/psel.json";

import "./ps.css";
import "./globals.css";

const title = "Processo Seletivo Softeam";
const description = "Venha fazer parte da Softeam, inscreva-se já em nosso processo seletivo!";
const imgLogo = "/logo-softeam.png"; // Make sure this is a valid PNG/JPG image
const URLSite = "https://softeam.com.br/ps";
const keywords =
  // eslint-disable-next-line max-len
  "empresa júnior, desenvolvimento web, mobile, consultoria tecnológica, softeam, tecnologia, website, site, software, desenvolvimento, inovação, soluções, ideias, transformação, contato, sistema, sistemas,processo seletivo";

const processoSeletivoAberto = data.ativo;

function index(): ReactElement {
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
      {/* Renderização condicional */}
      {processoSeletivoAberto ? <PS /> : <SemPS />}
      <Footer />
    </div>
  );
}
export default index;
