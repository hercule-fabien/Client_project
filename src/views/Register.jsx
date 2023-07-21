const React = require("react");
const Layout = require("./Layout");

function Register() {
  return (
    <Layout>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <h2
            className="text-center mb-4"
            style={{ color: "#fbe1a1", opacity: "80%" }}
          >
            Зарегистрируйтесь
          </h2>
          <hr />
          <script defer src="/js/reg.js" />
          <form
            action="/register"
            method="POST"
            id="regForm"
            style={{ marginTop: "20px" }}
          >
            <label htmlFor="exampleInput1" className="form-label">
              Login
            </label>
            <input
              name="login"
              type="text"
              className="form-control"
              id="exampleInput1"
              style={{ width: "100%" }}
            />

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
          <hr />
          <h3 className="regMsg"></h3>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Register;
