import Image from "next/image";
import React from "react";
import "./footer.css";

const textBotton = "Software Team 2025 \u00A9 :: Feito com Café e Paçoca";

const information = [
  { icon: "/email.png", text: "contato@softeam.com.br" },
  { icon: "/instagram.png", text: "Instagram" },
  { icon: "/linkedin.png", text: "LinkedIn" },
  { icon: "/location.png", text: "Av. Marechal Rondon, S/N | Departamento de Computacao - UFS" },
  { icon: "/phone.png", text: "+55 79 8100-0041" },
  { icon: "/whatsapp.png", text: "Whatsapp" },
];

const socialNetworks = [
  { icon: "/instagram.png", name: "Instagram", link: "https://www.instagram.com/softeam.ejc/", effectHover: "linkSN1" },
  {
    icon: "/linkedin.png",
    name: "Linkedin",
    link: "https://www.linkedin.com/company/softeam-ejc",
    effectHover: "linkSN2",
  },
  { icon: "/whatsapp.png", name: "Whatsapp", link: "https://wa.me/+557981000041", effectHover: "linkSN3" },
];

function Footer(): React.JSX.Element {
  return (
    <div className="container">
      <div className="information">
        {information.map((info, index) => (
          <div className="info" key={index}>
            <div className="iconInfo">
              {/* Debug: Check if the image loads */}
              <Image src={info.icon} alt={info.text} width={25} height={25} />
            </div>
            <p>{info.text}</p>
          </div>
        ))}
        <p className="textBotton">{textBotton}</p>
      </div>
      <div className="socialNetworks">
        {socialNetworks.map((SN, index) => (
          <a className={SN.effectHover} key={index} href={SN.link} target="_blank" rel="noopener noreferrer">
            <Image className="iconSN" src={SN.icon} alt={SN.name} width={40} height={40} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
