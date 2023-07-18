const React = require('react');
const Layout = require('./Layout');

module.exports = function Welcome({login}) {
  return (
    <Layout login={login}>
<h1>Let's learn</h1>
    </Layout>
  )}