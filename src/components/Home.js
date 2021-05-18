import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: 0.5,
  },
  blogHeader: {
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: "20px",
    color: "white",
  },
});

const Home = () => {
  document.title = "Home";
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 30,
            },
            density: {
              enable: true,
              value_area: 900,
            },
            shape: {
              type: "star",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
    </>
  );
};

export default Home;
