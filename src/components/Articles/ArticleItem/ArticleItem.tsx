import * as React from "react";
import { navigate } from "gatsby";
import Image, { FluidObject } from "gatsby-image";
import { Typography } from "@material-ui/core";
import * as Styled from "./styled";
import useHover from "../../../hooks/useHover";

interface Props {
  description: string;
  image: FluidObject | FluidObject[];
  slug: string;
  tag: string;
  title: string;
  large?: boolean;
}

function ArticleItem(props: Props) {
  const { title, tag, description, image, slug, large = false } = props;
  const { hoverRef, isHovered } = useHover();
  const showDescription = large || isHovered;

  return (
    <Styled.CardContainer
      ref={hoverRef}
      large={large}
      onClick={() => {
        navigate(`/blog/${slug}`);
      }}
    >
      <Image
        fluid={image}
        style={{
          height: 214,
          borderBottom: "1px solid #e4e4e4",
          width: large ? "216px" : "auto",
        }}
      />
      <div style={{ position: "relative", height: large ? "auto" : 117 }}>
        <Styled.CardDetails large={large}>
          <Typography
            variant="subtitle2"
            color="primary"
            style={{ fontWeight: 300 }}
          >
            {tag}
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ fontWeight: 500, marginTop: 8 }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textPrimary"
            style={{
              fontWeight: 300,
              display: showDescription ? "flex" : "none",
            }}
          >
            {description.substr(0, 106)}...
          </Typography>
        </Styled.CardDetails>
      </div>
    </Styled.CardContainer>
  );
}

export default ArticleItem;
