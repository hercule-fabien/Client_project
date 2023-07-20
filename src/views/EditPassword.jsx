const React = require("react");
const Layout = require("./Layout");

module.exports = function EditPassword({ login }) {
  return (
    <Layout>
      <script defer src="/js/changePass.js" />
  
      <div style={{ textAlign: "center" }}>
        <h1
          style={{ color: "#fbe1a1", opacity: "80%", fontSize: "32px" }}
        >
          Измените пароль
        </h1>
      </div>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <hr />
      </div>
      <main
        className="form-wrapper"
        role="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          id="passwordUpd"
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <label
            htmlFor="current_password"
            style={{ fontSize: "18px", color: "#444" }}
          >
            Текущий пароль
          </label>
          <input
            id="current_password"
            name="currentPassword"
            type="password"
            value=""
            className="form-control"
          />

          <label
            htmlFor="new_password"
            style={{ fontSize: "18px", color: "#444" }}
          >
            Новый пароль
          </label>
          <input
            id="new_password"
            name="newPassword"
            type="password"
            value=""
            className="form-control"
          />

          <label
            htmlFor="new_password_valid"
            style={{ fontSize: "18px", color: "#444" }}
          >
            Подтвердите новый пароль
          </label>
          <input
            id="new_password_valid"
            name="newPasswordValid"
            type="password"
            value=""
            className="form-control"
          />

          <input style={{ width: "250px" }}
            type="submit"
            value="Сохранить новый пароль"
            className="buttonUpdPassword btn btn-warning"
          />
        </form>
      </main>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <hr />
      </div>
    </Layout>
  );
};
