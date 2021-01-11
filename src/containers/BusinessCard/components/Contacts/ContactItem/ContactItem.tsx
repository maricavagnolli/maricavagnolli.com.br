import * as React from "react";
import { IconButton, SvgIconTypeMap, Typography } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  link: string;
}

function ContactItem({ Icon, title, link }: Props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton aria-label={title} color="primary" size="small">
        <Icon />
      </IconButton>
      <a
        href={link}
        target="_blank"
        style={{ color: "#000", textDecoration: "none", marginLeft: "8px" }}
      >
        <Typography variant="body2" style={{ fontWeight: 200 }}>
          {title}
        </Typography>
      </a>
    </div>
  );
}

export default ContactItem;
