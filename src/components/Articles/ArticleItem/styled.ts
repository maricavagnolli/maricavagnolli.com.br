import styled from "styled-components";

type Props = {
  large: boolean;
};

export const CardContainer = styled.article<Props>`
  width: 100%;
  height: ${({ large }) => (large ? "auto" : "calc(215px + 117px)")};
  background: #fff;
  border: 1px solid #e4e4e4;
  margin-top: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: ${({ large }) => (large ? "row" : "column")};
`;

export const CardDetails = styled.div<Props>`
  box-sizing: border-box;
  padding: 24px 16px 32px;
  position: ${({ large }) => (large ? "relative" : "absolute")};
  background: #ffffff;
  height: ${({ large }) => (large ? "100%" : "auto")};

  ${({ large }) =>
    !large &&
    `
    bottom: 0;
  `}

  ${CardContainer}:hover & {
    background: #fafafa;
    text-decoration: underline;
  }
`;
