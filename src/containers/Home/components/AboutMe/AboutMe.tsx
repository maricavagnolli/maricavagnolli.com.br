import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Container from "../../../../components/Container";
import * as Styled from "./styled";

interface Props {}

function AboutMe(props: Props) {
  const {} = props;
  const { aboutMeBackground, profile } = useStaticQuery(graphql`
    query AboutMePhoto {
      aboutMeBackground: file(relativePath: { eq: "aboutme-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3500, maxHeight: 1966) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      profile: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 215) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const backgroundImage = aboutMeBackground.childImageSharp.fluid.src;

  return (
    <Container
      title="Quem sou eu"
      withContainer
      withPadding
      color="#2F2E41"
      background={backgroundImage}
      backgroundSize="cover"
      withImageOpacity
      backgroundFixed
      fontColor="#FFF"
    >
      <Grid container style={{ color: "#fff" }} spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}
          container
          justify="center"
          alignContent="center"
          style={{ marginBottom: 16 }}
        >
          <Styled.Profile fluid={profile.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={12} sm={8}>
          Meu nome é Mariana Cavagnolli, tenho 24 anos, sou nutricionista
          formada pela Universidade FMABC e vegetariana desde que entrei para a
          faculdade. Sou apaixonada por nutrição infantil e atualmente sou pós
          graduanda em Fisiologia e Bioquímica da Nutrição pela Universidade São
          Camilo. Atuo como nutricionista pela Clínica Pró-Saúde em São Bernardo
          do Campo junto com uma equipe maravilhosa e meu objetivo é sempre
          trazer uma nutrição humanizada, sem terrorismo ou radicalismo. Quero
          que os pacientes saiam do consultório sabendo comer de uma forma
          equilibrada e mais saudável, sem ter medo da comida.
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;
