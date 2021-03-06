import React from "react"
import { Row, Col, Container } from "react-bootstrap";
import { EnvironmentHelper } from "../helpers";

export const Header: React.FC = () => (<>
  <div id="navbar" className="fixed-top">
    <Container>
      <Row>
        <div className="col-6 col-lg-2-5"><a className="navbar-brand" href="/"><img src="/images/logo.png" alt="logo" /></a></div>
        <Col className="d-none d-xl-block" xl={7}>

        </Col>
        <div className="col-6 col-lg-2-5 text-right" id="navRight">
          <a href={EnvironmentHelper.AppUrl} className="link">Login</a>
          <a href="/#register" className="btn btn-success btn-sm">Get Started</a>
        </div>
      </Row>
    </Container>
  </div>
  <div id="navSpacer"></div>
</>)
