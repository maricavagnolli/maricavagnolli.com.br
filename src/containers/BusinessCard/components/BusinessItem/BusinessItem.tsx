import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons";

interface Props {
  title: string;
  content: React.ReactElement;
}

function BusinessItem({ title, content }: Props) {
  return (
    <Box marginTop="24px">
      <Typography variant="subtitle2" style={{ fontWeight: 300 }}>
        {title}
      </Typography>
      <Box marginTop="12px" position="relative">
        {content}
      </Box>
    </Box>
  );
}

export default BusinessItem;
