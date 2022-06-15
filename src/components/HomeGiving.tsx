import { Container, Grid } from "@mui/material";
import React from "react";

export const HomeGiving: React.FC = () => (
  <div className="homeSection" id="givingSection">
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <img src="/images/home/giving.png" alt="giving" className="img-fluid" />
        </Grid>
        <Grid item md={6} xs={12}>
          <div className="title"><span>Easy, Quick and Efficient</span></div>
          <h2>Track Giving</h2>
          <ul>
            <li>CHUMS makes it easy to track your giving.  Our batch input makes data entry quick and efficient.</li>
            <li>You can export giving data to CSV files to easily prepare giving statements.</li>
            <li>Create an unlimited number of funds to track gifts to special causes and view breakdwons of giving over time, either by fund or see the big picture.</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  </div>
)
