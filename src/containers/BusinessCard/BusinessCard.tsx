import React from "react";
import { WhatsApp, Instagram, EmailOutlined } from "@material-ui/icons";
import { IconButton, Box, Typography } from "@material-ui/core";
import Image, { GatsbyImageFixedProps } from "gatsby-image";
import BusinessItem from "./components/BusinessItem";
import Shortcut from "./components/Shortcut";
import Contacts from "./components/Contacts";
import encodeText from "../../utils/encodeText";
import * as Styled from "./styled";

interface Props {
  profilePhoto: GatsbyImageFixedProps;
}

const shortcutLinks = [
  {
    Icon: WhatsApp,
    title: "WhatsApp",
    link: `https://wa.me/5511952971341?text=${encodeText(
      "Olá nutri, tudo bem? Gostaria de conhecer mais sobre o seu serviço!"
    )}`,
  },
  {
    Icon: Instagram,
    title: "Instagram",
    link: "http://instagram.com/_u/nutri.maricavagnolli",
  },
  {
    Icon: EmailOutlined,
    title: "E-mail",
    link: "mailto:nutri@maricavagnolli.com.br",
  },
];

const Shortcuts = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "80px" }}>
      {shortcutLinks.map((props) => (
        <div key={props.title} style={{ display: "flex", marginRight: "16px" }}>
          <Shortcut {...props} />
        </div>
      ))}
    </div>
  );
};

function BusinessCard({ profilePhoto }: Props) {
  return (
    <Styled.ContainerWrapper>
      <Styled.Container maxWidth="sm">
        <Styled.CustomContactIllustration height="140" />
        <Styled.ContactInfo>
          <Styled.ImageWrapper>
            <Image
              fixed={profilePhoto.fixed}
              style={{ borderRadius: "50%", border: "5px solid #fafafa" }}
            />
          </Styled.ImageWrapper>
          <Box marginTop="64px">
            <Typography variant="h5" style={{ fontWeight: 300 }}>
              Mariana Cavagnolli
            </Typography>
          </Box>
          <Box marginTop="8px">
            <Typography variant="subtitle1" style={{ fontWeight: 100 }}>
              Nutricionista - CRN3: 62633/P
            </Typography>
          </Box>
          <BusinessItem title="Links rápidos" content={<Shortcuts />} />
          <BusinessItem
            title="Sobre mim"
            content={
              <Typography variant="body2" style={{ fontWeight: 200 }}>
                Nutricionista formada pela Faculdade de Medicina do ABC,
                atualmente pós graduando Bioquímica e Fisiologia aplicada na
                Nutrição na Universidade São Camilo e atuando em Nutrição
                Clínica pela Clínica Pro Saúde.
              </Typography>
            }
          />
          <BusinessItem title="Contatos" content={<Contacts />} />
        </Styled.ContactInfo>
      </Styled.Container>
    </Styled.ContainerWrapper>
  );
}

export default BusinessCard;
