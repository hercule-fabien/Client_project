const React = require('react');
const Layout = require('./Layout');

module.exports = function Welcome({login}) {
  return (
    <Layout login={login}>

<div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="/img/pic.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="100%" height="100%" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Let's learn</h1>
        <p class="lead">Добро пожаловать на сайт для изучения английского языка! Здесь вы сможете легко освоить новые слова и фразы. Мы предлагаем интересные карточки с английскими словами и их переводами, чтобы вы могли учиться эффективно и с удовольствием. Присоединяйтесь и начните улучшать свои знания английского языка прямо сейчас! Удачи в изучении!</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href='/login'><button type="button" class="btn btn-warning btn-lg px-4 me-md-2">Login</button></a>
          <a href='/register'><button type="button" class="btn btn-outline-secondary btn-lg px-4">Register</button></a>
        </div>
      </div>
    </div>
  </div>
    </Layout>
  )}