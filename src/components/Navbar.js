import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";

import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactMailIcon from "@material-ui/icons/ContactMail";

import FormatIndentIncreaseIcon from "@material-ui/icons/FormatIndentIncrease";
import avatar from "../image/like.jpg";
import Footer from "./Footer";

const useStyle = makeStyles((theme) => ({
  menuSliderContainer: {
    width: "250",
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <HomeIcon />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentIndIcon />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <AppsIcon />,
    listText: "Project",
    listPath: "/project",
  },
  {
    listIcon: <DescriptionIcon />,
    listText: "Blog",
    listPath: "/Blog",
  },
  {
    listIcon: <ContactMailIcon />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyle();

  const slideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Nasir Uddin" />
      <Divider />
      <List>
        {menuItems.map((IsItem, key) => (
          <ListItem button key={key} component={Link} to={IsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {IsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={IsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton edge="start" onClick={toggleSlider("right", true)}>
              <FormatIndentIncreaseIcon
                style={{
                  color: "tomato",
                  fontSize: "40px",
                  marginLeft: "30px",
                }}
              />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  marginLeft: "50px",
                  padding: "3px",
                  color: "white",
                  fontWeight: "bold",
                  borderBottom: "4px solid white",
                  borderRight: "4px solid white",
                  borderRadius: "0 40px 0 28px",
                  fontSize: "30px",
                }}
              >
                <Typography
                  variant="span"
                  style={{
                    backgroundColor: "white",
                    fontSize: "30px",
                    fontWeight: "bold",
                    padding: "3px",
                    color: "#525",
                    borderRadius: "50%",
                  }}
                >
                  N
                </Typography>
                asiR
              </Link>
            </Typography>
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {slideList("right")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
