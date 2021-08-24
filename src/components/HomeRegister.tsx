import React from "react";
import { ErrorMessages, EnvironmentHelper } from ".";
import { Row, Col, Container } from "react-bootstrap"
import { Register } from "../appBase/pageComponents/components/Register"

export function HomeRegister() {
  const [customErrors, setCustomErrors] = React.useState<string[]>([]);

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
            <Register updateErrors={setCustomErrors} appName="ChurchApps" appUrl={EnvironmentHelper.AppUrl} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
