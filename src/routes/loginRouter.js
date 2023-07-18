const express = require('express');
const bcrypt = require('bcrypt');

const loginRouter = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

const { User } = require('../../db/models');

loginRouter.get('/', (req, res) => {
  renderTemplate(Login, {}, res);
});

loginRouter.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { name:login } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.login = user.name;
        req.session.save(() => {
          res.json({ msg: 'Вы успешно авторизованы!' });
        });
      } else {
        res.json({ err: 'Пароль неверный' });
      }
    } else {
      res.json({ err: 'Такой пользователь не найден' });
    }
  } catch (error) {
    res.send('Чтото пошло не так', error);
  }
});


module.exports = loginRouter;
