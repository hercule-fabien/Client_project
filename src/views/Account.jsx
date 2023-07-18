const React = require('react');
const Layout = require('./Layout');

module.exports = function Account() {
  return (
    <Layout>
      <link rel="stylesheet" href="css/progress.css" />
      <script defer src="/js/progress.js" />
      <div id="progress-circle">
        <div id="progress-count" />
      </div>
      <h5></h5>
    </Layout>
  );
};
