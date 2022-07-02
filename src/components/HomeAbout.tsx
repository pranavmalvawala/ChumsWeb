import { Button, Container, Grid } from "@mui/material";
import React from "react";

export const HomeAbout: React.FC = () => (
  <div className="homeSection alt" id="aboutSection">
    <Container fixed>
      <Grid container>
        <Grid item md={2} sm={0}></Grid>
        <Grid item md={8} xs={12} sx={{textAlign: "center"}}>
          <div className="title"><span>Chu</span>rch <span>M</span>anagement <span>S</span>oftware</div>
          <h2>About CHUMS</h2>
          <p className="lead">CHUMS is a completely free service provided to Christian churches and ministries.</p>
          <p>
            Every year the Church spends over <b>$800 million</b> on church management software.
            We believe that money can be put to better use, which is why we developed CHUMS; a completely free, open-source church management platform.
            We are a <b>501(c)(3) non profit</b> providing a free alternative to other paid church management platforms.
            Visit our <a href="https://github.com/LiveChurchSolutions/ChumsApp" target="_blank" rel="noopener noreferrer">GitHub</a> page to host CHUMS yourself, or let us host it for you by registering for a free account below.
          </p>
          <p>CHUMS is built and provided free of charge by <a href="https://livecs.org/">Live Church Solutions</a>, a 501(c)(3) that was founded in 2012 with the goal of helping small churches with their technical needs.</p>
          <Button variant="outlined" href="https://livecs.org/">Learn More</Button>
        </Grid>
      </Grid>
    </Container>
  </div>
)
