import React from "react";
import Navbar from "./Navbar";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: "0",
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  document.title = "Resume";
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web designer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Learning Earning & Development Project
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <ListItem>creating website designs</ListItem>
              <ListItem>producing sample sites</ListItem>
              <ListItem>
                meeting with clients to discuss requirements and/or project
                progress
              </ListItem>
              <ListItem>
                demonstrating and receiving feedback about draft sites
              </ListItem>
              <ListItem>
                keeping up to date with recent technological and software
                developments
              </ListItem>
              <ListItem>
                developing skills and expertise in appropriate
                software/programming languages such as HTML and Javascript
              </ListItem>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web development
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Learning Earning & Development Project
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <ListItem>Writing efficient code</ListItem>
              <ListItem>
                Creating websites/a website using standard HTML/CSS practices
              </ListItem>
              <ListItem>
                Working closely with web designers and programmers to produce
                the website
              </ListItem>
              <ListItem>
                Constant communication with other colleagues in the business to
                develop and deploy their content – and ensuring there is a clear
                establishment of what can be created within what timeframe
              </ListItem>
              <ListItem>
                Researching different software programs, maintaining software
                documentation
              </ListItem>
              <ListItem>
                Implementing contingency plans in case the website goes down
              </ListItem>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Javascript developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Programming-hero Web Course
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <ListItem>
                Strong understanding of JavaScript, its quirks, and workarounds
              </ListItem>
              <ListItem>
                Basic understanding of web markup, including HTML5 and CSS3
              </ListItem>
              <ListItem>
                Good understanding of asynchronous request handling, partial
                page updates, and AJAX
              </ListItem>
              <ListItem>
                Proficient understanding of cross-browser compatibility issues
                and ways to work around such issues
              </ListItem>
              <ListItem>
                Familiarity with JavaScript module loaders, such as Require.js
                and AMD
              </ListItem>
              <ListItem>
                Good understanding of browser rendering behavior and performance
              </ListItem>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              frontend developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Programming-hero Web Course
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <ListItem>Develop new user-facing features</ListItem>
              <ListItem>
                Build reusable code and libraries for future use
              </ListItem>
              <ListItem>
                Ensure the technical feasibility of UI/UX designs
              </ListItem>
              <ListItem>
                Optimize application for maximum speed and scalability
              </ListItem>
              <ListItem>
                Assure that all user input is validated before submitting to
                back-end
              </ListItem>
              <ListItem>
                Collaborate with other team members and stakeholders
              </ListItem>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              React developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Programming-hero Web Course
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <ListItem>
                Responsible for development of new highly-responsive, web-based
                user interface.
              </ListItem>
              <ListItem>
                Construct visualizations that are able to depict vast amounts of
                data.
              </ListItem>
              <ListItem>
                Work and collaborate with the rest of the engineering team.
              </ListItem>
              <ListItem>Work with product team and graphic designers.</ListItem>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              MERN Stack
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Programming-hero Web Course
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <ListItem>
                Ability to translate Wire frames and PSD Designs into functional
                web apps using HTML5, React , Node.js, and Mongo
              </ListItem>
              <ListItem>
                Binding of UI elements to JavaScript object models
              </ListItem>
              <ListItem>Creating RESTful services with Node.js</ListItem>
              <ListItem>
                Be responsive to change requests and feature requests
              </ListItem>
              <ListItem>
                Create Unit and Integration tests to ensure the quality of code
              </ListItem>
              <ListItem>Architect scalable web architectures</ListItem>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
