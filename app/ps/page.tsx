import React, { ReactElement } from "react";
import Navbar from "../components/Navbar";
import PS from "./ps";
import SemPS from "./semPS";
import Footer from "../components/footer/footer";
import Head from "next/head";

import { Metadata } from "next";
import data from "@/public/psel.json";

const title = "Processo Seletivo Softeam";
const description = "Venha fazer parte da Softeam, inscreva-se já em nosso processo seletivo!";
const imgLogo = "/logo-softeam.png"; // Make sure this is a valid PNG/JPG image
const URLSite = "https://softeam.com.br/ps";
const keywords =
  // eslint-disable-next-line max-len
  "empresa júnior, desenvolvimento web, mobile, consultoria tecnológica, softeam, tecnologia, website, site, software, desenvolvimento, inovação, soluções, ideias, transformação, contato, sistema, sistemas,processo seletivo";

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

{
  /*Variavel para saber se há processo seltivo*/
}
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
