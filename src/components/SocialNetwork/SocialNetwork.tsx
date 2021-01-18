import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import encodeText from "../../utils/encodeText";

export const socialNetworkQuickLinks = [
  {
    Icon: WhatsAppIcon,
    title: "WhatsApp",
    link: `https://wa.me/5511952971341?text=${encodeText(
      "Olá nutri, tudo bem? Gostaria de conhecer mais sobre o seu serviço!"
    )}`,
  },
  {
    Icon: InstagramIcon,
    title: "Instagram",
    link: "http://instagram.com/_u/nutri.maricavagnolli",
  },
  {
    Icon: EmailOutlined,
    title: "E-mail",
    link: "mailto:nutri@maricavagnolli.com.br",
  },
  {
    Icon: LinkedInIcon,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/mariana-cavagnolli/",
  },
];

function SocialNetwork() {
  return (
    <>
      {socialNetworkQuickLinks.map((social) => (
        <a
          href={social.link}
          key={social.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir o ${social.title}`}
        >
          <IconButton aria-label={social.title} color="default">
            <social.Icon />
          </IconButton>
        </a>
      ))}
    </>
  );
}

export default SocialNetwork;
