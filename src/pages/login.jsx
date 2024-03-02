import React from "react";
import { Form, Button } from "react-bootstrap";
import "../assets/styles/login.scss";

const login = () => {
  return (
    <section id="login-page">
      <article className="image-container ">
        <h2 className="m-auto fw-bold text-white">Welcome</h2>
      </article>
      <article className="form-login  ">
        <div className="container-form h-100 mx-auto p-3 p-md-5">
          <h1 className="mb-5 fw-bold">Login</h1>
          <form>
            <Form.Label size="lg" htmlfor="email">
              Email
            </Form.Label>
            <Form.Control
              size="lg"
              className="mb-4"
              id="email"
              placeholder="Email"
              aria-label="Email"
              type="email"
            />
            <Form.Label size="lg" htmlFor="inputPassword5">
              Password
            </Form.Label>
            <Form.Control
              className="mb-2"
              size="lg"
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text size="lg" className="mb-4" id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
            <Button className="w-100 mt-5 fw-semibold" size="lg">
              Login
            </Button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default login;
