const React = require("react");
const Layout = require("./Layout");

module.exports = function Login() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-md-6">
          <h2 className="text-center mb-4" style={{ color: "#fbe1a1" }}>
            Войдите на сайт
          </h2>
          <hr />
          <script defer src="/js/login.js" />
          <script defer src="/js/lostPass.js" />
          <script src="https://smtpjs.com/v3/smtp.js" />
          <form id="loginForm" style={{ marginTop: "30px" }}>
            <label htmlFor="exampleInput3" className="form-label">
              Электронная почта
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              style={{ width: "100%" }}
            />

            <label htmlFor="exampleInput2" className="form-label">
              Пароль
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInput2"
              style={{ width: "100%" }}
            />
            <button type="submit" className="btn btn-warning mt-3">
              Отправить
            </button>
          </form>
          <button
            type="button"
            className="btn btn-outline-dark mt-3"
            id="lostPass"
          >
           Забыл пароль
          </button>
          <hr />
          <h3 className="logMsg" />
        </div>
      </div>
    </Layout>
  );
};
