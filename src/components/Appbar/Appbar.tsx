import * as React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link } from "gatsby";
import Logo from "../Logo";

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

function Appbar(props: Props) {
  const classes = useStyles();
  const {} = props;

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <Logo />
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
