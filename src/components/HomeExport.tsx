import { Container, Grid } from "@mui/material";
import React from "react";

export const HomeExport: React.FC = () => (
  <div className="homeSection" id="exportSection">
    <Container>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <img src="/images/home/export.png" alt="import and export" className="img-fluid" />
        </Grid>
        <Grid item md={6}>
          <div className="title"><span>Import and Export</span></div>
          <h2>You Own Your Data</h2>
          <ul>
            <li>Use our import tool to bring in any existing data you may have and use our export tool at any time to take your data with you.</li>
            <li>If you choose, you may also completely delete all data from CHUMS any time you wish.</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  </div>
);
