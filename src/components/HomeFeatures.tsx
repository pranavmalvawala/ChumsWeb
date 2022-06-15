import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { HomeFeature } from "./HomeFeature";

export const HomeFeatures: React.FC = () => (
  <div className="homeSection" id="featuresSection">
    <Container fixed>
      <div className="text-center">
        <div className="title">Features</div>
        <h2>Say Goodbye to<br />Excel Documents.</h2>
        <Grid container spacing={3}>
          <Grid item md={4}><HomeFeature icon="far fa-user" title="People" content="Easily track pertinent information on all your members and guests" /></Grid>
          <Grid item md={4}><HomeFeature icon="far fa-calendar-check" title="Attendance" content="Save time tracking attendance with our self check-in app" /></Grid>
          <Grid item md={4}><HomeFeature icon="fas fa-users" title="Groups" content="Easily manage classes, small groups and missions" /></Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={2} sm={0}></Grid>
          <Grid item md={8} sm={12}>
            <Grid container spacing={3}>
              <Grid item md={6}><HomeFeature icon="fas fa-hand-holding-usd" title="Giving" content="Quickly enter donations and see reports showing giving over time." /></Grid>
              <Grid item md={6}><HomeFeature icon="fas fa-align-left" title="Forms" content="Build custom forms to collect any information you would like." /></Grid>
            </Grid>
          </Grid>
        </Grid>
        <div><Button variant="contained" color="success" size="large" href="#register">Get Started for Free</Button></div>
      </div>
    </Container>
  </div>
)
