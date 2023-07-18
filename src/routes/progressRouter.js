const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Progress, User } = require('../../db/models');
const Account = require('../views/Account');

router.get('/', (req, res) => {
  try {
    const { login } = req.session;
    renderTemplate(Account, { login }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { login } = req.session;
    console.log(login, 'login====');
    const user = await User.findOne({ where: { name: login } });
    console.log(user, '====user');
    const results = await Progress.findAll({ where: { userId: user.id } });
    const isLearned = results.filter((el) => el.isLearned === true);
    //   console.log(isLearned.length);
    const progress = ((isLearned.length / results.length) * 100).toFixed(2); // 66.67%
    //   console.log(progress);
    res.json({ progress });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
