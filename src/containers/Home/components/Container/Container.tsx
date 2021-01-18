import * as React from "react";
import { Typography, Container as MuiContainer } from "@material-ui/core";
import * as Styled from "./styled";

interface Props {
  color?: string;
  background?: string;
  backgroundSize?: string;
  title?: string;
  withContainer?: boolean;
  withPadding?: boolean;
  withImageOpacity?: boolean;
  backgroundFixed?: boolean;
  fontColor?: string;
  size?: "sm" | "md" | "lg";
}

const Content: React.FC<Props> = ({
  title,
  fontColor = "#000000",
  children,
}) => (
  <>
    {title && (
      <Typography
        variant="h4"
        style={{ fontFamily: "Sacramento", color: fontColor }}
      >
        {title}
      </Typography>
    )}
    {children}
  </>
);

const Container: React.FC<Props> = (props) => {
  const {
    color = "#FFFFFF",
    background,
    withContainer,
    size = "md",
    withPadding = false,
    withImageOpacity = false,
    backgroundFixed = false,
    backgroundSize = "contain",
  } = props;
  return (
    <Styled.Container
      color={color}
      background={background}
      withPadding={withPadding}
      backgroundSize={backgroundSize}
      backgroundFixed={backgroundFixed}
      withImageOpacity={withImageOpacity}
    >
      {withContainer ? (
        <MuiContainer maxWidth={size}>
          <Content {...props} />
        </MuiContainer>
      ) : (
        <Content {...props} />
      )}
    </Styled.Container>
  );
};

export default Container;
