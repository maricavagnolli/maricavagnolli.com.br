import * as React from "react";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";
import * as Styled from "./styled";
import { Typography } from "@material-ui/core";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  link: string;
}

function Shortcut({ Icon, title, link }: Props) {
  return (
    <div style={{ minWidth: "60px" }}>
      <Styled.ButtonContainer>
        <a href={link} target="_blank">
          <Styled.Button>{<Icon style={{ fill: "#fff" }} />}</Styled.Button>
        </a>
        <Typography variant="caption" style={{ alignSelf: "center" }}>
          {title}
        </Typography>
      </Styled.ButtonContainer>
    </div>
  );
}

export default Shortcut;
