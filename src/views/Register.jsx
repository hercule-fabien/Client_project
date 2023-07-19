const React = require('react');
const Layout = require('./Layout');

function Register() {
  return (
    <Layout>
      <h2 style={{marginLeft:"180px", color:"#fbe1a1", opacity:"80%"}}>Зарегистрируйтесь</h2>
      <hr />
      <script defer src="/js/reg.js" />
      <form action="/register" method="POST" id="regForm" style={{marginTop:"70px"}}>
        <label htmlFor="exampleInput1" className="form-label">Login</label>
        <input name="login" type="text" className="form-control" id="exampleInput1" style={{width:'80%'}} />

        <label htmlFor="exampleInput3" className="form-label">Email</label>
        <input name="email" type="email" className="form-control" id="email" style={{width:'80%'}} />

        <label htmlFor="exampleInput2" className="form-label">Password</label>
        <input name="password" type="password" className="form-control" id="exampleInput2" style={{width:'80%'}}/>
        <button type="submit" className="btn btn-warning">Отправить</button>
      </form>
      <hr />
      <h3 className="regMsg"></h3>
    </Layout>
  );
}

module.exports = Register;