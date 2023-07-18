const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { checkUser } = require('../middlewares/common');
const Welcome = require('../views/Welcome');
const Cards = require('../views/Cards');
const { Category, Card } = require('../../db/models');

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

router.get('/:categoryId', async (req, res) => {
  const { login } = req.session;
  const { categoryId } = req.params;
  try {
    const category = await Category.findByPk(categoryId);
    const cards = await Card.findAll({ where: { categoryId } });
    renderTemplate(Cards, { login, category, cards }, res);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
