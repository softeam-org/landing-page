import Image from "next/image";
import React from "react";
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
      <div id="contato" className="container_footer">
        <div className="information">
          {information.map((info, index) => (
            <div className="info" key={index}>
              <div className="iconInfo">
                <Image src={info.icon} alt={info.text} width={128} height={128} loading="lazy" />
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
