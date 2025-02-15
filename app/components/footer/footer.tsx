import Image from "next/image";
import React from "react";
import "./footer.css";
import emailIcon from "../icons/email.png";
import locationIcon from "../icons/location.png";
import phoneIcon from "../icons/phone.png";
import instagramIcon from "../icons/instagram.png";
import linkedinIcon from "../icons/linkedin.png";
import whatsappIcon from "../icons/whatsapp.png"

const information = [
    { icon: emailIcon, text: "Adrress" },
    { icon: phoneIcon, text: "(79) 99999-9999" },
    { icon: locationIcon, text: "contato@softeam.com" }
]

const socialNetworks = [
    { icon: instagramIcon,name:"Instagram" ,link: "Instagram.com" },
    { icon: linkedinIcon,name:"Linkedin", link: "Linkedin.com" },
    { icon: whatsappIcon,name:"Whatsapp", link: "Whatsapp.com" }
]

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
                <p>Café e Paçoca</p>
            </div>
            <div className="socialNetworks">
                {socialNetworks.map((SN, index) => (
                    <a className="iconSN" key={index} href={SN.link} target="_blank" rel="noopener noreferrer">
                        <Image  src={SN.icon} alt={SN.name} width={40} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Footer;