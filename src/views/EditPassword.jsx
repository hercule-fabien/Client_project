const React = require('react');
const Layout = require('./Layout');

module.exports = function EditPassword({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/changePass.js" />
      <h1 style={{textAlign:'center'}}>Измените пароль</h1>

      <main className="form-wrapper" role="main">
        <form id='passwordUpd' style={{display:'flex', flexDirection:'column', gap:'15px', alignItems:"center"}}>
          <label htmlFor="current_password">Текущий пароль:</label>
          <input id="current_password" name="currentPassword" type="text" value="" />

          <label htmlFor="new_password">Новый пароль:</label>
          <input id="new_password" name="newPassword" type="text" value='' />

          <label htmlFor="new_password_valid">Подтвердите новый пароль:</label>
          <input id="new_password_valid" name="newPasswordValid" type="text" value='' />

          <input type="submit" value="Сохранить новый пароль" className="buttonUpdPassword btn btn-warning" />
        </form>
      </main>
    </Layout>
  );
};