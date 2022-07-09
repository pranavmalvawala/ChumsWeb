import React from "react";
import { ErrorMessages, EnvironmentHelper } from ".";
import { Register } from "../appBase/pageComponents/components/Register"
import ReactGA from "react-ga";
import { UserInterface } from "../appBase/interfaces";
import { Container, Grid } from "@mui/material";

export function HomeRegister() {
  const [customErrors, setCustomErrors] = React.useState<string[]>([]);

  const trackRegister = async (user: UserInterface) => {
    if (EnvironmentHelper.GoogleAnalyticsTag !== "") ReactGA.event({ category: "User", action: "Register" });
  }

  return (
    <div className="homeSection" id="registerSection">
      <Container fixed>
        <div id="register"></div>

        <Grid container spacing={3}>
          <Grid item md={6} xs={0}><img src="/images/home/register.png" alt="register" /></Grid>
          <Grid item md={6} xs={12}>
            <div className="title"><span>Join CHUMS</span></div>
            <h2>Register for a Free Account</h2>
            <p>You'll be up and running in less than a minute.</p>

            <ErrorMessages errors={customErrors} />
            <Register updateErrors={setCustomErrors} appName="ChurchApps" appUrl={EnvironmentHelper.AccountsAppUrl} userRegisteredCallback={trackRegister} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
