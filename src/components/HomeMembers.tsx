import { Container, Grid } from "@mui/material";
import React from "react";

export const HomeMembers: React.FC = () => (
  <div className="homeSection alt" id="membersSection">
    <Container>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <div className="title"><span>Robust Information Tracking</span></div>
          <h2>Members and Groups</h2>
          <ul>
            <li>Easily track all of the pertinent information about your members and guests including contact information, birth dates, relationships and anniversary dates.</li>
            <li>Create unlimited custom fields to track information unique to your church such as when membership 101 class was attended.</li>
            <li>You may create an unlimited amount of groups for classes, at-home small groups, or various ministries.</li>
            <li>You can also track attendance on each of these groups, if you choose and see reports showing how your groups are growing over time.</li>
          </ul>
        </Grid>
        <Grid item md={6} xs={12}><img src="/images/home/members.png" alt="Members" /></Grid>
      </Grid>
    </Container>
  </div>
)
