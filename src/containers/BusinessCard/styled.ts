import styled from "styled-components";
import MuiContainer from "@material-ui/core/Container";

import ContactIllustration from "../../images/contact.svg";

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const Container = styled(MuiContainer)`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const CustomContactIllustration = styled(ContactIllustration)`
  width: 100%;
  max-width: 250px;
  align-self: flex-end;
`;

export const ContactInfo = styled.main`
  background: #fafafa;
  width: 100%;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  position: relative;
  padding: 0 32px 32px 32px;

  @media (min-width: 768px) {
    height: auto;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -72px;
  left: calc(50% - 60px);
`;
