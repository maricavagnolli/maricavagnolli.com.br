import * as React from "react";
import { Button as MaterialButton, ButtonProps } from "@material-ui/core";
import theme from "../../styles/theme";

function Button(props: ButtonProps) {
  return (
    <MaterialButton
      {...props}
      style={{ borderRadius: `${theme.spacing(2)}px` }}
    />
  );
}

export default Button;
