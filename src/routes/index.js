const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { checkUser } = require('../middlewares/common');
const Welcome = require('../views/Welcome');

router.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(Welcome, { login }, res);
});

router.get('/logout', checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('MemorizeCookie');
    res.redirect('/');
  });
});

module.exports = router;
