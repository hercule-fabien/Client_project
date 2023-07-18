const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <h2 style={{marginLeft:"180px", marginBottom: "50px" ,color:"#fbe1a1"}}>Войдите на сайт</h2>
      <hr />
      <script defer src="/js/login.js" />
      <form id="loginForm" style={{marginTop:"70px"}}>
        <label htmlFor="exampleInput1" className="form-label">Login</label>
        <input name="login" type="text" className="form-control" id="exampleInput1" style={{width:'200%'}} />

        <label htmlFor="exampleInput2" className="form-label">Password</label>
        <input name="password" type="password" className="form-control" id="exampleInput2" style={{width:'200%'}} />
        <button type="submit" className="btn btn-warning">Отправить</button>
      </form>
      <hr />
      <h3 className='logMsg'></h3>
    </Layout>
  );
};