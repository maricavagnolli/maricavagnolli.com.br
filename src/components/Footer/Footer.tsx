import { Typography } from "@material-ui/core";
import * as React from "react";
import Container from "../Container";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <Container withContainer color="#3F3D56">
      <Typography style={{ color: "#fff", padding: "40px 0" }}>
        Copyright © 2021 Mariana Cavagnolli
      </Typography>
    </Container>
  );
}

export default Footer;
