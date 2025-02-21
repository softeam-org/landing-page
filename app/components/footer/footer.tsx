import Image from "next/image";
import React from "react";
import emailIcon from "../footer/icons/email.png";
import instagramIcon from "../footer/icons/instagram.png";
import linkedinIcon from "../footer/icons/linkedin.png";
import locationIcon from "../footer/icons/location.png";
import phoneIcon from "../footer/icons/phone.png";
import whatsappIcon from "../footer/icons/whatsapp.png";
import "./footer.css";

const textBotton = "Software Team 2025 \u00A9 :: Feito com Café e Paçoca";

const information = [
  { icon: locationIcon, text: "Av. Marechal Rondon,S/N | Departamento de Computacao - UFS" },
  { icon: phoneIcon, text: "+55 79 8100-0041" },
  { icon: emailIcon, text: "contato@softeam.com.br" },
];

const socialNetworks = [
  { icon: instagramIcon, name: "Instagram", link: "https://www.instagram.com/softeam.ejc/", effectHover: "linkSN1" },
  {
    icon: linkedinIcon,
    name: "Linkedin",
    link: "https://www.linkedin.com/company/softeam-ejc",
    effectHover: "linkSN2",
  },
  { icon: whatsappIcon, name: "Whatsapp", link: "https://wa.me/+557981000041", effectHover: "linkSN3" },
];

function Footer(): React.JSX.Element {
  return (
    <div className="container">
      <div className="information">
        {information.map((info, index) => (
          <div className="info" key={index}>
            <div className="iconInfo">
              <Image src={info.icon} alt={info.text} width={25} />
            </div>
            <p>{info.text}</p>
          </div>
        ))}
        <p className="textBotton">{textBotton}</p>
      </div>
      <div className="socialNetworks">
        {socialNetworks.map((SN, index) => (
          <a className={SN.effectHover} key={index} href={SN.link} target="_blank" rel="noopener noreferrer">
            <Image className="iconSN" src={SN.icon} alt={SN.name} width={40} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
