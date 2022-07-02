import React from "react"
import { Container, AppBar, Stack, Box, Button } from "@mui/material";
import { EnvironmentHelper } from "../helpers";

export const Header: React.FC = () => (<>
  <AppBar id="navbar" position="fixed">
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <a href="/" className="logo"><img src="/images/logo.png" alt="logo" /></a>
        <Box sx={{display: "flex", alignItems: "center", whiteSpace: "nowrap"}}>
          <a href={EnvironmentHelper.AppUrl} className="link">Login</a>
          <Button href="/#register" variant="contained" size="small" disableElevation color="success" sx={{ "&:focus": { outline: "none", color: "white" }, marginLeft: "15px" }}>Get Started</Button>
        </Box>
      </Stack>
    </Container>
  </AppBar>
  <div id="navSpacer"></div>
</>)
