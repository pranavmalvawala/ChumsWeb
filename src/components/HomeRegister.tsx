import React from "react";
import { ErrorMessages, EnvironmentHelper } from ".";
import { Row, Col, Container } from "react-bootstrap"
import { Register } from "../appBase/pageComponents/components/Register"
import ReactGA from "react-ga";
import { UserInterface } from "../appBase/interfaces";

export function HomeRegister() {
  const [customErrors, setCustomErrors] = React.useState<string[]>([]);

  const trackRegister = async (user: UserInterface) => {
    if (EnvironmentHelper.GoogleAnalyticsTag !== "") ReactGA.event({ category: "User", action: "Register" });
  }

  return (
    <div className="homeSection" id="registerSection">
      <Container>
        <div id="register"></div>

        <Row>
          <Col lg={6} className="d-none d-lg-block"><img src="/images/home/register.png" alt="register" className="img-fluid" /></Col>
          <Col lg={6}>
            <div className="title"><span>Join CHUMS</span></div>
            <h2>Register for a Free Account</h2>
            <p>You'll be up and running in less than a minute.</p>

            <ErrorMessages errors={customErrors} />
            <Register updateErrors={setCustomErrors} appName="ChurchApps" appUrl={EnvironmentHelper.AccountsAppUrl} userRegisteredCallback={trackRegister} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
