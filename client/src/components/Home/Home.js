import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

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
const Home = () => {
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
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
  );
};

export default Home;
