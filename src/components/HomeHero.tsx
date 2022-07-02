import { Button, Container, Grid } from "@mui/material";
import React from "react";

export const HomeHero: React.FC = () => (
  <div id="hero">
    <Container fixed>
      <Grid container>
        <Grid item md={2} xs={0}></Grid>
        <Grid item md={8} xs={12} sx={{textAlign: "center"}}>
          <h1>Completely <span>Free, Open-Source</span><br />Church Management Platform.</h1>
          <p>Reliable church management software is a critical component for any growing church.  It frees up staff and volunteer time while ensuring processes are adhered to and you are effectively engaging with your congregation and guests.</p>
          <div><Button variant="contained" color="success" size="large" href="#register">Get Started for Free</Button></div>
        </Grid>
      </Grid>
    </Container>
  </div>
)
