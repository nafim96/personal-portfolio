import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BottomNavigation,
  BottomNavigationAction,
  Link,
} from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiButtonNavigationAction-root": {
      minWidth: "0",
      maxWidth: "250",
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "2.8rem",
      },
    },
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Footer = () => {
  const classes = useStyle();

  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <Link
        href="https://www.facebook.com/nafim96"
        target="_blank"
        className={classes.root}
        style={{ paddingTop: "5px" }}
        variant="body1"
      >
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<Facebook />}
        />
      </Link>

      <Link
        href="https://twitter.com/nafim_nasir"
        target="_blank"
        className={classes.root}
        style={{ paddingTop: "5px" }}
        variant="body2"
      >
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<Twitter />}
        />
      </Link>

      <Link
        href="https://www.github.com/nafim96"
        target="_blank"
        className={classes.root}
        style={{ paddingTop: "5px" }}
        variant="body3"
      >
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<Github />}
        />
      </Link>

      <Link
        href="https://www.linkedin.com/in/nasir-96"
        target="_blank"
        className={classes.root}
        style={{ paddingTop: "5px" }}
        variant="body4"
      >
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<LinkedIn />}
        />
      </Link>
    </BottomNavigation>
  );
};

export default Footer;
