import { Container, Grid } from "@mui/material";
import React from "react"
import { EnvironmentHelper } from "../helpers";

export const Header: React.FC = () => (<>
  <div id="navbar" className="fixed-top">
    <Container>
      <Grid container spacing={3}>
        <Grid item md={3} xs={6}><a className="navbar-brand" href="/"><img src="/images/logo.png" alt="logo" /></a></Grid>
        <Grid item md={6} xs={0}></Grid>
        <Grid item md={3} xs={6} id="navRight" className="text-right">
          <a href={EnvironmentHelper.AppUrl} className="link">Login</a>
          <a href="/#register" className="btn btn-success btn-sm">Get Started</a>
        </Grid>
      </Grid>
    </Container>
  </div>
  <div id="navSpacer"></div>
</>)
