import { Button, Container, Grid, Box } from "@mui/material";
import React from "react";
import { HomeFeature } from "./HomeFeature";

export const HomeFeatures: React.FC = () => (
  <div className="homeSection" id="featuresSection">
    <Container fixed>
      <Box sx={{textAlign: "center"}}>
        <div className="title">Features</div>
        <h2>Say Goodbye to<br />Excel Documents.</h2>
        <Grid container sx={{justifyContent: "center"}} spacing={3}>
          <Grid item md={4} sm={6} width="100%"><HomeFeature icon="person_outline" title="People" content="Easily track pertinent information on all your members and guests" /></Grid>
          <Grid item md={4} sm={6} width="100%"><HomeFeature icon="event_available" title="Attendance" content="Save time tracking attendance with our self check-in app" /></Grid>
          <Grid item md={4} sm={6} width="100%"><HomeFeature icon="groups" title="Groups" content="Easily manage classes, small groups and missions" /></Grid>
          <Grid item md={4} sm={6} width="100%"><HomeFeature icon="volunteer_activism" title="Giving" content="Quickly enter donations and see reports showing giving over time." /></Grid>
          <Grid item md={4} sm={6} width="100%"><HomeFeature icon="format_align_left" title="Forms" content="Build custom forms to collect any information you would like." /></Grid>
        </Grid>
        <div><Button variant="contained" color="success" size="large" href="#register">Get Started for Free</Button></div>
      </Box>
    </Container>
  </div>
)
