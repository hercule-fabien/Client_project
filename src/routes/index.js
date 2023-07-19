const router = require('express').Router();
const bcrypt = require('bcrypt');
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const { checkUser } = require('../middlewares/common');
const Welcome = require('../views/Welcome');
const Cards = require('../views/Cards');
const {
  Category, Card, User, Progress,
} = require('../../db/models');
const Home = require('../views/Home');
const {
  Category, Card, User, Progress,
} = require('../../db/models');
const Home = require('../views/Home');

router.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(Welcome, { login }, res);
});

router.get('/home', async (req, res) => {
  const { login } = req.session;
  const categories = await Category.findAll();
  renderTemplate(Home, { login, categories }, res);
});

router.post('/newCard', async (req, res) => {
  const { email } = req.session;
  const { categoryName, question, answer } = req.body;
  const user = await User.findOne({ where: { email } });
  const category = await Category.findOne({ where: { name: categoryName } });
  const newCard = await Card.create({ categoryId: category.id, question, answer });
  await Progress.create({
    isLearned: false,
    userId: user.id,
    cardId: newCard.id,
  });
  res.json(newCard);
});

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
  try {
    const mailCheck = await User.findOne({ where: { email } });
    if (!mailCheck) {
      res.json({ status: 403 });
    } else {
      const newPass = randomPass();
      const hashPass = await bcrypt.hash(newPass, 10);
      await User.update({ password: hashPass }, { where: { email } });
      console.log(res);
      res.json({ status: 200, data: newPass, name: mailCheck.name });
    }
  } catch (error) {
    res.send(error);
  }
});

router.get('/categories/:categoryId', async (req, res) => {
  const { login } = req.session;
  const { categoryId } = req.params;
  try {
    const category = await Category.findByPk(categoryId);
    const cards = await Card.findAll(
      {
        where: { categoryId },
        include: Progress,
      },
    );
    // console.log('Cards 0 ====> ', cards[0].Progresses[0].dataValues);
    renderTemplate(Cards, { login, category, cards }, res);
  } catch (error) {
    console.error(error);
  }
});

router.patch('/categories/cards/:id', async (req, res) => {
  const cardId = req.params.id;
  try {
    const progress = await Progress.findOne({ where: { cardId } });
    progress.isLearned = !progress.isLearned;
    await progress.save();
    res.json(progress);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
