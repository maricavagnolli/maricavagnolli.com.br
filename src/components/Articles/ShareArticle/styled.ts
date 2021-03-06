import styled from "styled-components";
import theme from "../../../styles/theme";

export const ShareArticle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const Rect = styled.div`
  width: 100%;
  height: 5px;
  background: ${theme.palette.primary.main};
  margin-right: 32px;
`;

export const Anchor = styled.a`
  color: var(--fontColor);
  font-size: 20px;
  text-decoration: none;
`;
