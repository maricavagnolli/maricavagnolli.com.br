import * as React from "react";
import { Transition } from "react-transition-group";
import { Link } from "gatsby";
import * as Styled from "./styled";
import SocialNetwork from "../../SocialNetwork";
import theme from "../../../styles/theme";

const menuItems = [
  {
    label: "Início",
    route: "/",
    id: "home",
    transitionDuration: 1000,
    partiallyActive: false,
  },
  {
    label: "Blog",
    route: "/blog/",
    id: "blog",
    transitionDuration: 1250,
    partiallyActive: true,
  },
  {
    label: "Contato",
    route: "/contato/",
    id: "contato",
    transitionDuration: 1500,
    partiallyActive: false,
  },
];

const getDefaultStyle = (duration: number) => ({
  position: "absolute",
  transition: `all ${duration}ms ease-in-out`,
  left: "40%",
  opacity: 0,
});

const transitionStyles = {
  entering: { left: "40px", opacity: 1 },
  entered: { left: "40px", opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
} as any;

function Menu({ transitionState }: any) {
  const inProp = transitionState === "entered";

  return (
    <Styled.Menu>
      <div style={{ marginBottom: "48px" }}>
        <Transition in={inProp} timeout={300}>
          {(state) => (
            <Styled.SocialLinks
              style={{ ...getDefaultStyle(1000), ...transitionStyles[state] }}
            >
              <Styled.SocialLinksBar />
              <SocialNetwork />
            </Styled.SocialLinks>
          )}
        </Transition>
      </div>
      {menuItems.map(
        ({ label, route, id, transitionDuration, partiallyActive }) => (
          <div
            key={id}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "8px 0",
              height: "56px",
            }}
          >
            <Transition in={inProp} timeout={300}>
              {(state) => (
                <Styled.MenuItem
                  style={{
                    ...getDefaultStyle(transitionDuration),
                    ...transitionStyles[state],
                  }}
                >
                  <Link
                    partiallyActive={partiallyActive}
                    activeStyle={{ color: theme.palette.primary.main }}
                    to={route}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "2.125rem",
                      fontWeight: 400,
                      lineHeight: "1.235",
                      letterSpacing: "0.00735em",
                    }}
                  >
                    {label}
                  </Link>
                </Styled.MenuItem>
              )}
            </Transition>
          </div>
        )
      )}
    </Styled.Menu>
  );
}

export default Menu;
