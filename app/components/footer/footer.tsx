import React from "react";
import "./footer.css";

const information = [
    { icon: "image1.jpeg", text: "Adrress" },
    { icon: "image2.jpeg", text: "(79) 99999-9999" },
    { icon: "image3.jpeg", text: "contato@softeam.com" }
]

const socialNetworks = [
    { icon: "image1.jpeg",name:"Instagram" ,link: "Instagram.com" },
    { icon: "image2.jpeg",name:"Linkedin", link: "Linkedin.com" },
    { icon: "image3.jpeg",name:"Whatsapp", link: "Whatsapp.com" }
]

function Footer(): React.JSX.Element {
    return (
        <div className="container">
            <div className="information">
                {information.map((info, index) => (
                    <div className="info" key={index}>
                        <img src="{info.icon}" alt="{info.text}" />
                        <p>{info.text}</p>
                    </div>
                ))}
                <p>Cafe e Paçoca</p>
            </div>
            <div className="socialNetworks">
                {socialNetworks.map((SN, index) => (
                    <a key={index} href={SN.link}>
                        <img src={SN.icon} alt={SN.name} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Footer;