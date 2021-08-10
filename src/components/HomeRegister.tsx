import React from "react";
import { ApiHelper, RegisterInterface, LoginResponseInterface, ErrorMessages, EnvironmentHelper } from ".";
import { Row, Col, Container, Button, Form } from "react-bootstrap"
import { PersonInterface } from "../helpers/Interfaces";
import * as yup from "yup";
import { Formik, FormikHelpers } from "formik";

const schema = yup.object().shape({
  churchName: yup.string().required("Please enter your church name."),
  firstName: yup.string().required("Please enter your first name."),
  lastName: yup.string().required("Please enter your last name."),
  email: yup.string().required("Please enter your email address.").email("Please enter a valid email address.")
})

export function HomeRegister() {
  const [customErrors, setCustomErrors] = React.useState([]);
  const [redirectUrl, setRedirectUrl] = React.useState("");

  async function createAccess(values: RegisterInterface) {
    let resp: LoginResponseInterface = await ApiHelper.postAnonymous("/churches/register", values, "AccessApi");
    if (resp.errors !== undefined) { setCustomErrors(resp.errors); return null; }
    else {
      const church = resp.churches[0];
      church.apis.forEach(api => { ApiHelper.setPermissions(api.keyName, api.jwt, api.permissions) })

      resp = await ApiHelper.post("/churchApps/register", { appName: "CHUMS" }, "AccessApi");
      const churches = resp.churches[0]
      if (resp.errors !== undefined) { setCustomErrors(resp.errors); return null; }
      else {
        churches.apis.forEach(api => {
          ApiHelper.setPermissions(api.keyName, api.jwt, api.permissions)
        })
        return resp;
      }
    }
  }

  async function handleSubmit(values: RegisterInterface, { setSubmitting, setErrors }: FormikHelpers<RegisterInterface>) {
    // check if user already exist with this email.
    setCustomErrors([]);

    const loginResp = await createAccess(values);
    if (loginResp != null) {
      const { person }: { person: PersonInterface } = await ApiHelper.post("/churches/init", { user: loginResp.user }, "MembershipApi");
      const promises: Promise<any>[] = [];
      promises.push(ApiHelper.post("/userchurch", { personId: person.id }, "AccessApi"));
      promises.push(ApiHelper.post("/churches/init", [], "AttendanceApi"));
      promises.push(ApiHelper.post("/churches/init", [], "GivingApi"));
      let responses = await Promise.all(promises);

      let errors: string[] = undefined;
      responses.forEach(resp => { if (resp.errors !== undefined) errors = resp.errors; });
      if (errors !== undefined) { setCustomErrors(errors); return 0; }
      else setRedirectUrl(EnvironmentHelper.AppUrl + "/login?checkEmail=1");

    }
    setSubmitting(false);
  }

  const initialValues: RegisterInterface = { churchName: "", firstName: "", lastName: "", email: "", appName: "Chums", appUrl: EnvironmentHelper.AppUrl };

  if (redirectUrl === "") {
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
              <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
                {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Church Name" name="churchName" value={values.churchName} onChange={handleChange} isInvalid={touched.churchName && !!errors.churchName} />
                      <Form.Control.Feedback type="invalid">{errors.churchName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Control type="text" placeholder="First Name" name="firstName" value={values.firstName} onChange={handleChange} isInvalid={touched.firstName && !!errors.firstName} />
                      <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Last Name" name="lastName" value={values.lastName} onChange={handleChange} isInvalid={touched.lastName && !!errors.lastName} />
                      <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Control type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} isInvalid={touched.email && !!errors.email} />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" variant="success" block disabled={isSubmitting}>
                      {isSubmitting ? "Registering. Please wait..." : "Get Started for Free"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    window.location.href = redirectUrl;
    return (<></>);
  }
}
