import React from "react";
import { Container, Grid, TextField } from "@material-ui/core";
import { GatsbyImageFixedProps } from "gatsby-image";
import CustomContainer from "../../components/Container";
import SocialNetwork from "../../components/SocialNetwork";
import Button from "../../components/Button";

interface Props {
  profilePhoto: GatsbyImageFixedProps;
}

type StatusProps = {
  status: "EMPTY" | "SUCCESS" | "ERROR";
};

function Contact({ profilePhoto }: Props) {
  const [emailStatus, setEmailStatus] = React.useState<StatusProps>({
    status: "EMPTY",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setEmailStatus({ status: "SUCCESS" });
      } else {
        setEmailStatus({ status: "ERROR" });
      }
    };
    xhr.send(data);
  };
  return (
    <Container maxWidth="md">
      <CustomContainer
        withContainer
        withPadding
        title="Contatos"
        color="transparent"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            Use esse espaço para conversar comigo, tirar suas dúvidas, agendar
            uma consulta, ou qualquer outra informação adicional que você queira
            saber.
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>Aqui você também pode encontrar alguns links rápidos.</p>
            <SocialNetwork />
          </Grid>
          <Grid item xs={12} sm={6}>
            <form
              action="https://formspree.io/f/mqkgndqq"
              onSubmit={handleSubmit}
              method="POST"
              style={{ display: "flex", gap: 16, flexDirection: "column" }}
            >
              <TextField
                id="name"
                name="name"
                label="Nome"
                variant="outlined"
                fullWidth
                helperText="Informe qual o seu nome"
                required
              />
              <TextField
                type="email"
                id="email"
                name="email"
                label="E-mail"
                variant="outlined"
                fullWidth
                helperText="Qual o melhor e-mail para eu entrar em contato?"
                required
              />
              <TextField
                id="subject"
                name="subject"
                label="Assunto"
                variant="outlined"
                fullWidth
                helperText="Sobre o que vamos falar?"
                required
              />
              <TextField
                id="description"
                name="message"
                label="Mensagem"
                variant="outlined"
                fullWidth
                rows={6}
                multiline
                helperText="Aqui você pode me mandar mais informações sobre o assunto"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ justifySelf: "flex-start" }}
              >
                Enviar
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <iframe
              src="https://www.google.com/maps?q=Avenida%20%C3%8Dndico%2C%20746%20-%20Jardim%20do%20Mar%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%20Brasil&z=14&t=&ie=UTF8&output=embed"
              width="100%"
              height="350"
            />
          </Grid>
        </Grid>
      </CustomContainer>
    </Container>
  );
}

export default Contact;
