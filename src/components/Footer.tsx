import React from "react";
import { Box } from "@mui/material";

export const Footer: React.FC = () => (
  <div id="footer">
    <Box sx={{textAlign: "center", padding: "0 15px"}}>
      <Box sx={{maxWidth: "165px", margin: "0 auto"}}><img src="/images/logo-white.png" alt="logo" /></Box>
      <p>Phone: 918-994-2638 &nbsp; | &nbsp; support@chums.org</p>
      <p>
        {new Date().getFullYear()} © <a href="https://livecs.org/">Live Church Solutions</a>
        <br />
                    A 501(c)(3) organization with EIN 45-5349618</p>
    </Box>
  </div>
)
