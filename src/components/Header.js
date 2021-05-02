import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Box, Grid, Link } from "@material-ui/core";
import avatar from "../image/like.jpg";
import Typed from "react-typed";

const useStyle = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(1),
  },
  title: {
    color: "#47ffee",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#b30000",
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
    color: "#000000",
    fontWeight: "bold",
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
        <Typed strings={["Nasir Uddin"]} typeSpeed={150} backSpeed={300} loop />
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
      <Typography
        component="button"
        style={{
          padding: "5px",
          border: "none",
          borderRadius: "10px",
          background: "linear-gradient(-90deg,red, yellow, green , blue)",
        }}
      >
        <Link
          href="https://drive.google.com/file/d/1WjFGYAV1qiXG8JXLmtUzyxgF_rWKtl_l/view?usp=sharing"
          target="_blank"
        >
          <Typography variant="body1" className={classes.button}>
            <Typed strings={["Download Resume"]} typeSpeed={150} />
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
};

export default Header;
