import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Box, Grid, Link } from "@material-ui/core";
import avatar from "../image/like.png";
import Typed from "react-typed";

const useStyle = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
    fontWeight: "bold",
  },
  subtitle: {
    color: "tan",
    fontWeight: "bold",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "30%",
    transform: "translate(-50% -50%)",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
  },
  button: {
    color: "#233",
    fontWeight: "bold",
    "&:hover": {
      color: "#ffffff",
      textDecoration: "none",
    },
  },
  buttonStyle: {
    padding: "5px",
    backgroundColor: "tan",
    border: "none",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#525",
      color: "#ffffff",
    },
  },
}));
const Header = () => {
  const classes = useStyle();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Nasir Uddin" />
      </Grid>
      <Typography variant="h3" className={classes.title}>
        <Typed strings={["Nasir Uddin"]} typeSpeed={150} />
      </Typography>
      <br />
      <Typography variant="h4" className={classes.subtitle}>
        <Typed
          strings={[
            "Web Developer",
            "React Developer",
            "MERN Stack",
            "Junior Software Engineer",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <Typography component="button" className={classes.buttonStyle}>
        <Link
          href="https://drive.google.com/file/d/1WjFGYAV1qiXG8JXLmtUzyxgF_rWKtl_l/view?usp=sharing"
          target="_blank"
        >
          <Typography variant="body1" className={classes.button}>
            Download Resume
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
};

export default Header;
