import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router } from "react-router-dom";
import { Themes } from "./appBase/helpers";
import { Routing } from "./Routing";
import { UserProvider } from "./UserContext"

const getBasename = (path: string) => path.substr(0, path.lastIndexOf("/"));

const App: React.FC = () => (
  <UserProvider>
    <CookiesProvider>
      <ThemeProvider theme={Themes.BaseTheme}>
        <CssBaseline />
        <Router basename={getBasename(window.location.pathname)}>
          <Routing />
        </Router>
      </ThemeProvider>
    </CookiesProvider>
  </UserProvider>
)
export default App;

