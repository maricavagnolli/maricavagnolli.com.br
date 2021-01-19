import styled from "styled-components";

type Props = {
  open: boolean;
};

export const MenuBar = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 2;
  padding: 80px 40px;
`;
