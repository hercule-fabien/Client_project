const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { checkUser } = require('../middlewares/common');
const Welcome = require('../views/Welcome');
const Cards = require('../views/Cards');
const { Category, Card, User } = require('../../db/models');
const Home = require('../views/Home')
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(Welcome, { login }, res);
});

router.get('/home', async(req,res) => {
  const { login } = req.session;
  const categories = await Category.findAll()
  renderTemplate(Home, {login, categories}, res)
})

router.post('/newCard', async(req,res) => {
  const {categoryName, question, answer} = req.body
  const category = await Category.findOne({where: {name:categoryName}})
  const newCard = await Card.create({categoryId:category.id, question, answer})
  res.json(newCard)
})

router.get('/logout', checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('MemorizeCookie');
    res.redirect('/');
  });
});

router.post('/lostpass', async (req, res) => {
  function randomPass() {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < 8) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      counter += 1;
    }
    return result;
  }
  const { email } = req.body;
  // console.log(req.body)
  // try {
    const mailCheck = await User.findOne({ where: { email } });
    if (!mailCheck) {
      res.json({ status: 403 });
    } else {
      const newPass = randomPass();
      const hashPass = await bcrypt.hash(newPass, 10);
      await User.update({ password: hashPass }, { where: { email } });
      console.log(res)
      res.json({ status: 200, data: newPass, name: mailCheck.name });
    }
  // } catch (error) {
  //   res.send(error);
  // }
});

router.get('/categories/:categoryId', async (req, res) => {
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
