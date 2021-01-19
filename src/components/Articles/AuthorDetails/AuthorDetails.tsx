import * as React from "react";
import Img, { FixedObject } from "gatsby-image";
import Typography from "@material-ui/core/Typography";
import * as Styled from "./styled";

type AuthorDetailsProps = {
  profilePhoto: FixedObject;
};

function AuthorDetails({ profilePhoto }: AuthorDetailsProps) {
  return (
    <Styled.Container>
      <Img
        fixed={profilePhoto}
        style={{
          borderRadius: "50%",
          minWidth: "80px",
          margin: "0 32px 0 0",
        }}
      />
      <Typography
        variant="body1"
        color="textPrimary"
        style={{
          fontSize: "20px",
          lineHeight: "2rem",
          fontWeight: 300,
          width: "100%",
        }}
      >
        Nutricionista formada pela Faculdade de Medicina do ABC, atualmente pós
        graduando Bioquímica e Fisiologia aplicada na Nutrição na Universidade
        São Camilo e atuando em Nutrição Clínica pela Clínica Pro Saúde.
      </Typography>
    </Styled.Container>
  );
}

export default AuthorDetails;
