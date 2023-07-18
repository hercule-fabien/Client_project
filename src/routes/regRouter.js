const express = require('express');
const bcrypt = require('bcrypt');

const regRouter = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Register');

const { User } = require('../../db/models');

regRouter.get('/', (req, res) => {
  renderTemplate(Register, {}, res);
});

regRouter.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.findOne({ where: { name:login } });
    if (user) {
      res.json({ err: 'Такой пользователь уже существует' });
    } else {
      const newUser = await User.create({ name: login, password: hash });
      req.session.login = newUser.name;
      req.session.save(() => {
        res.json({ msg: 'Пользователь зарегистрирован' });
      });
    }
  } catch (error) {
    console.log('oshibka', error);
  }
});

module.exports = regRouter;
