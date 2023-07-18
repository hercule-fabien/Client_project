const React = require('react');
const Layout = require('./Layout');

module.exports = function Account({ login }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="css/progress.css" />
      <script defer src="/js/progress.js" />
      <div id="progress-circle">
        <div id="progress-count" />
      </div>

    </Layout>
  );
};
