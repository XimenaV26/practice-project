import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import "../assets/styles/login.scss";
import { FaArrowRotateRight } from "react-icons/fa6";
import * as Yup from "yup";
import { Formik } from "formik";
import { startLogin } from "../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const submit = async ({ email, password }) => {
    dispatch(startLogin({ email, password }));
  };

  return (
    <section id="login-page">
      <article className="image-container ">
        <h2 className="m-auto fw-bold text-white">Welcome</h2>
      </article>
      <article className="form-login  ">
        <div className="container-form h-100 mx-auto p-3 p-md-5">
          <h1 className="mb-5 fw-bold">Login</h1>
          {status}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={submit}
          >
            {({ errors, values, handleChange, handleSubmit, isSubmitting }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group
                  as={Col}
                  controlId="validationEmail"
                  className="mb-3"
                >
                  <Form.Label size="lg">Email</Form.Label>
                  <Form.Control
                    size="lg"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="Email"
                    aria-label="Email"
                    type="email"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationPassword">
                  <Form.Label size="lg">Password</Form.Label>
                  <Form.Control
                    size="lg"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    type="password"
                    aria-describedby="passwordHelpBlock"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 mt-5 fw-semibold"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <FaArrowRotateRight /> : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </article>
    </section>
  );
};

export default Login;
