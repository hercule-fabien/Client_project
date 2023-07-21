const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const { checkUser } = require('../middlewares/common');
const Welcome = require('../views/Welcome');
const Cards = require('../views/Cards');
const {
  Category, Card, User, Progress,
} = require('../../db/models');
const Home = require('../views/Home');
const EditPassword = require('../views/EditPassword');

router.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(Welcome, { login, title: 'Домашняя страница' }, res);
});

router.get('/home', async (req, res) => {
  const { login } = req.session;
  const categories = await Category.findAll();
  renderTemplate(Home, { login, categories }, res);
});

router.get('/editProfile', (req, res) => {
  const { login } = req.session;
  renderTemplate(EditPassword, { login }, res);
});

router.put('/newPassword', async (req, res) => {
  const { currentPassword, newPassword, newPasswordValid } = req.body;
  const { email } = req.session;
  const user = await User.findOne({ where: { email } });
  const checkPassword = await bcrypt.compare(currentPassword, user.password);
  if (newPassword === newPasswordValid && checkPassword) {
    const hash = await bcrypt.hash(newPassword, 10);
    const newPersonalInfo = await User.update(
      { password: hash },
      { where: { email } },
    );
    res.json(newPersonalInfo);
  } else {
    res.sendStatus(403);
  }
});

router.post('/newCard', async (req, res) => {
  const { categoryName, question, answer } = req.body;
  const { email } = req.session;
  const user = await User.findOne({ where: { email } });
  const category = await Category.findOne({ where: { name: categoryName } });
  const newCard = await Card.create({
    categoryId: category.id,
    question,
    answer,
    owner: user.id,
  });
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
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
      counter += 1;
    }
    return result;
  }
  const { email } = req.body;

  try {
    const mailCheck = await User.findOne({ where: { email } });
    if (!mailCheck) {
      res.json({ status: 403 });
    } else {
      const newPass = randomPass();
      const hashPass = await bcrypt.hash(newPass, 10);
      await User.update({ password: hashPass }, { where: { email } });
      res.json({ status: 200, data: newPass, name: mailCheck.name });
    }
  } catch (error) {
    res.send(error);
  }
});

router.get('/categories/:categoryId', async (req, res) => {
  const { login } = req.session;
  const { categoryId } = req.params;
  const { email } = req.session;
  const user = await User.findOne({ where: { email } });
  try {
    const category = await Category.findByPk(categoryId);
    const cards = await Card.findAll({
      where: { categoryId },
      include: [
        {
          model: Progress,
          where: { userId: user.id },
          required: false,
        },
      ],
    });
    // const nonLearnedCards = cards.filter((card) => card.Progresses.length === 0 || !card.Progresses[0].isLearned);
    const nonLearnedCards = cards.filter((card) => {
      if (card.Progresses.length === 0 || !card.Progresses[0].isLearned) {
        if (card.owner === null || card.owner === user.id) {
          return true;
        }
      }
      return false;
    });
    renderTemplate(Cards, {
      login, category, cards, nonLearnedCards,
    }, res);
  } catch (error) {
    console.error(error);
  }
});

router.patch('/categories/cards/:id', async (req, res) => {
  const { email } = req.session;
  const cardId = req.params.id;
  try {
    const user = await User.findOne({ where: { email } });
    const progress = await Progress.findOne({
      where: { cardId, userId: user.id },
    });
    if (progress) {
      progress.isLearned = !progress.isLearned;
      await progress.save();
      res.json(progress);
    } else {
      const newProgress = await Progress.create({
        isLearned: true,
        userId: user.id,
        cardId,
      });
      res.json(newProgress);
    }
  } catch (error) {
    console.error(error);
  }
});

router.get('/reset/:id', async (req, res) => {
  const categoryId = req.params.id;
  const { email } = req.session;
  try {
    const user = await User.findOne({ where: { email } });

    const progresses = await Progress.findAll({
      where: { userId: user.id },
      include: [{
        model: Card,
        where: { categoryId },
      }],
    });

    await Promise.all(progresses.map((progress) => progress.update({ isLearned: false })));

    res.json({ message: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while resetting the cards.' });
  }
});


module.exports = router;
