import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
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
            <div>
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
            <h3>Skills & Endorsement</h3>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
