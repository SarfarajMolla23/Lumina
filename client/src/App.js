import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { getPosts } from "./actions/posts.js";
import { useDispatch } from "react-redux";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import lumina3 from "./images/lumina3.png";
import useStyles from "./styles.js";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography
          className="lumina"
          variant="h4"
          align="center"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "3px",
            textTransform: "uppercase",
            textShadow: "2px 4px 10px rgba(0, 0, 0, 0.3)",
            padding: "10px 15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Lumina
          <img
            className={classes.image}
            src={lumina3}
            alt="lumina3"
            height="60px"
          />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column-reverse",
              },
            }}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
