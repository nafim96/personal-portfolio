import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
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
import project1 from "../image/project/project-1.png";
import project2 from "../image/project/project-2.png";
import project3 from "../image/project/project-3.png";
import project4 from "../image/project/project-4.png";
import project5 from "../image/project/project-5.png";
import project6 from "../image/project/project-6.png";
import project7 from "../image/project/project-7.png";
import project8 from "../image/project/project-8.png";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
}));

const Project = () => {
  document.title = "Project";
  const classes = useStyle();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Typography
        variant="h3"
        style={{
          color: "tomato",
          textTransform: "uppercase",
          textAlign: "center",
          paddingTop: "5px",
        }}
      >
        Some Projects
      </Typography>
      <Grid container justify="center" alignItems="center">
        {/* project 1  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  ChocoRoco
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <ListItem>
                    We will be adding more feature in our feature page
                  </ListItem>
                  <ListItem>
                    We Implement Our Exceptional service systems
                  </ListItem>
                  <ListItem>We Provide more product.</ListItem>
                  <ListItem>
                    Our Contact section always open so you can send your mind's
                    speech
                  </ListItem>
                  <ListItem>
                    We always provide best customer service and we accepted our
                    customer Reviews.
                  </ListItem>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  <Link
                    variant="body1"
                    href="https://chocorocodb.web.app/"
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* project 2  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Enter City Map
                </Typography>
                <Typography variant="body3" color="textSecondary" component="p">
                  <ListItem>
                    This applications have best discount offers in this summer.
                  </ListItem>
                  <ListItem>
                    This app easy to use any where in any place.
                  </ListItem>
                  <ListItem>
                    We are recently starting new features like Qurear
                  </ListItem>
                  <ListItem>We provide safe and first riding</ListItem>
                  <ListItem>We use google tracker for more safety</ListItem>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  <Link
                    variant="body1"
                    href="https://enter-city-map.web.app/"
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* project 3  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Green Safe
                </Typography>
                <Typography variant="body4" color="textSecondary" component="p">
                  <ListItem>World Wide Tree</ListItem>
                  <ListItem>Environmental Tree</ListItem>
                  <ListItem>Fruits tree</ListItem>
                  <ListItem>Organic Food Tree</ListItem>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  <Link
                    variant="body1"
                    href="https://greensafe-5b5cd.web.app/"
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* project 4  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Legend Club
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <ListItem>This is World wide Legend Club.</ListItem>
                  <ListItem>This club have no gender restrictions.</ListItem>
                  <ListItem>Now we are opening sigIn for new user</ListItem>
                  <ListItem>We provide world Class player</ListItem>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  <Link
                    variant="body1"
                    href="https://the-legend-club.netlify.app/"
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* project 5  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 4"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Taxi Cab
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <ListItem>This is World wide Legend Club.</ListItem>
                  <ListItem>This club have no gender restrictions.</ListItem>
                  <ListItem>Now we are opening sigIn for new user</ListItem>
                  <ListItem>We provide world Class player</ListItem>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  <Link
                    variant="body1"
                    href="https://nafim96.github.io/taxi-cab/index.html"
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* project 6 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 4"
                height="140"
                image={project6}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  PIXA
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <ListItem>This is World wide Legend Club.</ListItem>
                  <ListItem>This club have no gender restrictions.</ListItem>
                  <ListItem>Now we are opening sigIn for new user</ListItem>
                  <ListItem>We provide world Class player</ListItem>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  <Link
                    variant="body1"
                    href="https://nafim96.github.io/fancy-slider/index.html"
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* project 7  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 4"
                height="140"
                image={project7}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Hungry Monster
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <ListItem>This is World wide Legend Club.</ListItem>
                  <ListItem>This club have no gender restrictions.</ListItem>
                  <ListItem>Now we are opening sigIn for new user</ListItem>
                  <ListItem>We provide world Class player</ListItem>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  <Link
                    variant="body1"
                    href="https://nafim96.github.io/hungry-monster/index.html"
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* project 8  */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 4"
                height="140"
                image={project8}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Check Temperature
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <ListItem>This is World wide Legend Club.</ListItem>
                  <ListItem>This club have no gender restrictions.</ListItem>
                  <ListItem>Now we are opening sigIn for new user</ListItem>
                  <ListItem>We provide world Class player</ListItem>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  <Link
                    variant="body1"
                    href="https://nafim96.github.io/hot-temperature/index.html"
                    target="_blank"
                  >
                    Live Site
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

export default Project;
