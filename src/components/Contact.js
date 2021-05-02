import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_NviiMMHBcDIzDKGSQtsBK");

const useStyle = makeStyles((theme) => ({
  form: {
    top: "35%",
    transform: "translate(-50% -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "& .Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  document.title = "Contact";
  const classes = useStyle();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "Gmail",
        "template_63cot6h",
        e.target,
        "user_NviiMMHBcDIzDKGSQtsBK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <>
      <Navbar />
      <Box component="div" style={{ background: "#233", height: "100vh" }}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography
              variant="h5"
              style={{
                color: "tomato",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Hire or contact me......
            </Typography>
            <form className="contact-form" onSubmit={sendEmail}>
              <InputField
                fullWidth={true}
                label="Name"
                type="name"
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />
              <InputField
                fullWidth={true}
                label="Email"
                type="email"
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />
              <InputField
                fullWidth={true}
                label="Company"
                type="company"
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />
              <Button
                className={classes.button}
                variant="outlined"
                fullWidth={true}
                endIcon={<SendIcon />}
                type="submit"
              >
                contact Me
              </Button>
            </form>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
