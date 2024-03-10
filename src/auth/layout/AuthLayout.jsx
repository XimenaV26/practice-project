export const AuthLayout = ({ children, title = "welcome" }) => {
  return (
    <section id="login-page">
      <article className="image-container ">
        <h2 className="m-auto fw-bold text-white">{title}</h2>
      </article>
      <article className="form-login  ">{children}</article>
    </section>
  );
};
