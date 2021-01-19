import * as React from "react";
import styled from "styled-components";
import { Grid, TextField } from "@material-ui/core";
import addToMailChimp from "gatsby-plugin-mailchimp";
import Container from "../../../../components/Container";
import NewsletterIllustration from "../../../../images/newsletter.svg";
import Button from "../../../../components/Button";
import * as Styled from "./styled";

interface Props {}

interface FormElements {
  name: HTMLInputElement;
  email: HTMLInputElement;
}

const CustomNewsletterIllustration = styled(NewsletterIllustration)`
  width: 100%;
  max-width: 60vw;
  align-self: flex-end;
`;

function Newsletter(props: Props) {
  const {} = props;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements = (event.currentTarget.elements as unknown) as FormElements;
    const email = elements.email.value;
    const name = elements.name.value;
    addToMailChimp(email, { FNAME: name });
  };

  return (
    <Container title="Newsletter" withContainer withPadding>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} container justify="center">
          Entre na lista de contatos e receba informações importantes, como
          receitas incríveis, novidades e dicas sobre a saúde e nutrição
          <CustomNewsletterIllustration />
        </Grid>
        <Grid item xs={12} sm={6} container justify="center">
          <form onSubmit={handleSubmit}>
            <Styled.NewsletterFormContainer>
              <TextField
                name="name"
                id="newsletter-name-input"
                variant="outlined"
                label="Nome"
                helperText="Como gostaria de ser chamado?"
                fullWidth
              />
              <TextField
                name="email"
                autoComplete="email"
                type="email"
                id="newsletter-email-input"
                variant="outlined"
                label="E-mail"
                helperText="Qual o melhor e-mail para receber as novidades?"
                fullWidth
                style={{ margin: "24px 0 32px 0" }}
              />
              <Button variant="contained" color="primary" type="submit">
                Cadastrar
              </Button>
            </Styled.NewsletterFormContainer>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Newsletter;
