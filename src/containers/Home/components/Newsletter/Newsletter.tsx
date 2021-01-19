import * as React from "react";
import styled from "styled-components";
import { Grid, TextField } from "@material-ui/core";
import Container from "../../../../components/Container";
import NewsletterIllustration from "../../../../images/newsletter.svg";
import Button from "../../../../components/Button";
import * as Styled from "./styled";

interface Props {}

const CustomNewsletterIllustration = styled(NewsletterIllustration)`
  width: 100%;
  max-width: 60vw;
  align-self: flex-end;
`;

function Newsletter(props: Props) {
  const {} = props;

  return (
    <Container title="Newsletter" withContainer withPadding>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} container justify="center">
          Entre na lista de contatos e receba informações importantes, como
          receitas incríveis, novidades e dicas sobre a saúde e nutrição
          <CustomNewsletterIllustration />
        </Grid>
        <Grid item xs={12} sm={6} container justify="center">
          <Styled.NewsletterFormContainer>
            <TextField
              variant="outlined"
              label="Nome"
              helperText="Como gostaria de ser chamado?"
              fullWidth
            />
            <TextField
              variant="outlined"
              label="E-mail"
              helperText="Qual o melhor e-mail para receber as novidades?"
              fullWidth
              style={{ margin: "24px 0 32px 0" }}
            />
            <Button variant="contained" color="primary">
              Cadastrar
            </Button>
          </Styled.NewsletterFormContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Newsletter;
