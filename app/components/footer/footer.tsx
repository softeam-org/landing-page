import Image from "next/image";
import React from "react";
import Waves from "../HeroSection/waves/Waves";
import "./footer.css";

const textBotton = "Software Team 2025 \u00A9 :: Feito com Café e Paçoca";

const information = [
  { icon: "/email.png", alt: "Icone representando um email", text: "contato@softeam.com.br" },
  {
    icon: "/location.png",
    alt: "Icone representando uma Localização",
    text: "Av. Marechal Rondon, S/N | Departamento de Computacao - UFS",
  },
  { icon: "/phone.png", alt: "Icone representando um Telefone", text: "+55 79 8100-0041" },
];

const socialNetworks = [
  {
    icon: "/instagram.png",
    alt: "Logo do Instagram",
    link: "https://www.instagram.com/softeam.ejc/",
    effectHover: "linkSN1",
  },
  {
    icon: "/linkedin.png",
    alt: "Logo do Linkedin",
    link: "https://www.linkedin.com/company/softeam-ejc",
    effectHover: "linkSN2",
  },
  {
    icon: "/whatsapp.png",
    alt: "Logo do Whatsapp",
    link: "https://wa.me/+557981000041",
    effectHover: "linkSN3",
  },
];

function Footer(): React.JSX.Element {
  return (
    <>
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
      <div id="contato" className="container_footer">
        <div className="information">
          {information.map((info, index) => (
            <div className="info" key={index}>
              <div className="iconInfo">
                <Image src={info.icon} alt={info.text} width={40} height={40} loading="lazy" />
              </div>
              <p>{info.text}</p>
            </div>
          ))}
          <p className="textBotton">{textBotton}</p>
        </div>
        <div className="socialNetworks">
          {socialNetworks.map((SN, index) => (
            <a className={SN.effectHover} key={index} href={SN.link} target="_blank" rel="noopener noreferrer">
              <Image className="iconSN" src={SN.icon} alt={SN.alt} width={40} height={40} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footer;
