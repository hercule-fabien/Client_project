const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { checkUser } = require('../middlewares/common');
const Welcome = require('../views/Welcome');
const Home = require('../views/Home')
const {Category} = require('../../db/models')

router.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(Welcome, { login }, res);
});

router.get('/home', async(req,res) => {
  const { login } = req.session;
  const categories = await Category.findAll()
  renderTemplate(Home, {login, categories}, res)
})

router.get('/logout', checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('MemorizeCookie');
    res.redirect('/');
  });
});

module.exports = router;
