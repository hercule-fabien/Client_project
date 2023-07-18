const React = require('react');
const Layout = require('./Layout');

module.exports = function Welcome({login, categories}) {
  return (
    <Layout login={login}>
<h1 style={{textAlign:'center', margin:'30px'}}>Choose a category!</h1>
<div style={{display:'flex', flexWrap:'wrap', gap:'15px', justifyContent:'center'}}>
{categories.map((category) => (
    <div class="card w-40" style={{width:'355px', heigth:'27rem'}}>
    <div class="card-body" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
      <h1 class="card-title">{category.name.toUpperCase()}</h1>
      <a href={`/${category.id}`} class="btn btn-outline-warning oneCategory">Learn {<strong>{category.name}</strong>} now!</a>
    </div>
  </div>
    ))}
</div>
    </Layout>
  )}