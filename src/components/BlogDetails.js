import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
  ListItem,
} from "@material-ui/core";
import Typed from "react-typed";

import { makeStyles } from "@material-ui/core/styles";
import blog from "../image/blog/medium-blog.png";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  blogHeader: {
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: "20px",
    color: "white",
  },
  typedContainer: {
    position: "absolute",
    top: "10%",
    transform: "translate(-50% -50%)",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
  },
}));

const BlogDetails = () => {
  const classes = useStyle();
  return (
    <Box component="div" className={classes.typedContainer}>
      <Typography variant="h4" className={classes.blogHeader}>
        <Typed
          strings={[
            " Thanks For Enter My Blog Site",
            "Have Your enough Time",
            "please let's see my blog",
          ]}
          typeSpeed={150}
          backSpeed={40}
          loop
        />
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={blog}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  style={{ textTransform: "uppercase" }}
                >
                  introducing basic javascript
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <ListItem>What is JavaScript?</ListItem>
                  <ListItem>How to use JavaScript Language?</ListItem>
                  <ListItem>Why JavaScript is popular language></ListItem>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <Link
                    variant="body1"
                    href="https://nasir-uddin-inc1227.medium.com/"
                    target="_blank"
                  >
                    Medium.com
                  </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link
                    variant="body1"
                    href="https://nasir-uddin-inc1227.medium.com/javascript-43cd6dd7c49e"
                    target="_blank"
                  >
                    See Blog...
                  </Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogDetails;
