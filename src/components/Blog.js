import React from "react";
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import { useStyle } from "./Home";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  document.title = "Blog";
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <BlogDetails />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 70,
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
              value: 3,
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

export default Blog;
