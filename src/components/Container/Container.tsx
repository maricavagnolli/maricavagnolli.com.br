import * as React from "react";
import { navigate } from "gatsby";
import {
  Typography,
  Container as MuiContainer,
  IconButton,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
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
  backButton?: boolean;
  fontColor?: string;
  size?: "sm" | "md" | "lg";
  titleSize?: "sm" | "md";
}

const Content: React.FC<Props> = ({
  title,
  titleSize = "sm",
  fontColor = "#000000",
  children,
  backButton = false,
}) => (
  <>
    {title && (
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        {backButton && (
          <IconButton
            aria-label="Voltar para página anterior"
            onClick={() => navigate(-1)}
          >
            <ArrowBack />
          </IconButton>
        )}
        <Typography
          variant={titleSize === "sm" ? "h4" : "h3"}
          style={{
            fontFamily: "Sacramento",
            color: fontColor,
          }}
        >
          {title}
        </Typography>
      </div>
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
