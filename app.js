require('dotenv').config();
require('@babel/register')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const express = require('express')
const logger = require('morgan')
const { secureRoute } = require('./src/middlewares/common');

const path = require('path');
const regRouter = require('./src/routes/regRouter');
const loginRouter = require('./src/routes/loginRouter');
const indexRouter = require('./src/routes/index');

const PORT = 3000
const app = express()

app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут
// находится статические файлы, т.е.файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, 'public')));
// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов
// типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые
// в формате JSON в body HTTP - запроса.
app.use(express.json());

const sessionConfig = {
    name: 'ExamCookie',
    store: new FileStore(),
    secret: process.env.SESSION_SECRET ?? 'Секретное слово',
    resave: false, // * если true, пересохранит сессию, даже если она не менялась
    saveUninitialized: false, // * если false, куки появятся только при установке req.session
    cookie: {
      maxAge: 9999999, // * время жизни в мс (ms)
      httpOnly: true,
    },
  };

app.use(session(sessionConfig));


app.use('/register', secureRoute, regRouter);
app.use('/login', secureRoute, loginRouter);
app.use('/', indexRouter)


app.listen(PORT, () => {
    console.log(`server started PORT: ${PORT}`);
  });