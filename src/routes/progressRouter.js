const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Progress, User } = require('../../db/models');
const Account = require('../views/Account');

router.get('/', async (req, res) => {
  const { login } = req.session;
  renderTemplate(Account, { login }, res);
});

router.get('/progress', async (req, res) => {
  const { login } = req.session;
  const user = await User.findOne({ where: login });
  //   console.log(user);
  const results = await Progress.findAll({ where: { userId: user.id }, raw: true });
  const isLearned = results.filter((el) => el.isLearned === true);
  //   console.log(isLearned.length);
  const progress = ((isLearned.length / results.length) * 100).toFixed(2); // 66.67%
  //   console.log(progress);
  res.json({ progress });
});

module.exports = router;
