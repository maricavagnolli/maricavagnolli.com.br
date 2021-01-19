import * as React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu as MenuIcon, Close } from "@material-ui/icons";
import { Link } from "gatsby";
import { Transition } from "react-transition-group";
import Logo from "../Logo";
import * as Styled from "./styled";
import Menu from "./Menu";

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const duration = 300;

const defaultStyle = {
  top: "-100%",
  transition: "all 0.5s ease",
  willChange: "bottom",
};

const transitionStyles = {
  entering: {
    top: "0",
    transform: "translateY(0)",
  },
  entered: {
    top: "0",
    transform: "translateY(0)",
  },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
} as any;

function Appbar(props: Props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const {} = props;

  return (
    <>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Logo />
          </Link>
        </Toolbar>
      </AppBar>
      <Transition in={open} timeout={duration}>
        {(state) => (
          <Styled.MenuBar
            open={open}
            style={{ ...defaultStyle, ...transitionStyles[state] }}
          >
            <Menu transitionState={state} />
          </Styled.MenuBar>
        )}
      </Transition>
    </>
  );
}

export default Appbar;
