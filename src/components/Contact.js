import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  skills: {
    background: "#0d1442",
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    fontSize: "20px",
    fontWeight: "bold",
    listStyle: "none",
    color: "#ffffff",
    textAlign: "center",
  },
  skill: {
    background: "#0526",
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ffffff",
    listStyle: "none",
    textAlign: "center",
  },
  contact: {
    color: "#ffffff",
    margin: theme.spacing(1),
    padding: theme.spacing(3),
  },
}));
const Contact = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <div className="container">
        <div
          className="row d-flex justify-content-center  align-items-center pt-5 "
          style={{ color: "tan" }}
        >
          <div
            className="col-md-5"
            style={{
              background: "#222",
              margin: "5px",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            <h3 className="text-center">Contact Info</h3>
            <div className={classes.contact}>
              <h4>Nasir Uddin</h4>
              <h5>Phone: (+880 1679-797459)</h5>
              <h5>E-mail: nasir.uddin.inc1227@gmail.com</h5>
              <p>Address: #6740, Belkuchi, Sirajganj</p>
            </div>
          </div>
          <div
            className="col-md-5"
            style={{
              background: "#222",
              margin: "5px",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ textAlign: "center", padding: "3px" }}>
              Skills & Endorsement
            </h3>
            <div>
              <li className={classes.skills}>JavaScript</li>
              <li className={classes.skill}>React</li>
              <li className={classes.skills}>Node.js</li>
              <li className={classes.skill}>MongoDB</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
