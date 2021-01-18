import styled from "styled-components";
import Image, { GatsbyImageProps } from "gatsby-image";

export const Profile = styled(Image)<GatsbyImageProps>`
  border-radius: 50%;
  border: 8px solid #dfe5fe;
  width: 150px;

  ${(props) => props.theme.breakpoints.up("sm")} {
    width: 215px;
  }
`;
