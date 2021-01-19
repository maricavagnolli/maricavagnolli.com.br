import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Container from "../../../../components/Container";
import SocialNetwork from "../../../../components/SocialNetwork";
import CupOfTea from "./CupOfTea";
import { Typography } from "@material-ui/core";

interface Props {}

function Welcome(props: Props) {
  const {} = props;
  const { file } = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "leafs.png" }) {
        childImageSharp {
          fluid(maxWidth: 1259, maxHeight: 380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const backgroundImage = file.childImageSharp.fluid.src;

  return (
    <Container color="#DFE5FE" background={backgroundImage} withContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <div style={{ padding: "80px 0" }}>
            <Typography variant="h3" style={{ fontFamily: "Sacramento" }}>
              Olá, seja muito bem vindo(a).
            </Typography>
            <p style={{ marginTop: 16 }}>
              Aqui você encontrará informações referentes ao meu trabalho,
              métodos e no que acredito para que você consiga alcançar seus
              objetivos, além de informações muito legais como receitas e dicas
              para continuar melhorando cada vez mais a sua qualidade de vida e
              seu bem estar.
            </p>
            <p style={{ marginTop: 32 }}>Minhas redes sociais</p>
            <SocialNetwork />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <CupOfTea />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Welcome;
