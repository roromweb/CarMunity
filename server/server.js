// import currentSessionUser from './middleWares/currentSessionUser';
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const postsRouter = require('./routers/postsRouter');
const usersRouter = require('./routers/usersRouter');

const apiRouter = require('./routes/apiRouter');
const brandsRouter = require('./routers/brandsRouter');
const articlesRouter = require('./routers/articlesRouter');
const modelsRouter = require('./routers/modelsRouter');
const photosRouter = require('./routers/photosRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('images'));
app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use('/api/posts', postsRouter);
app.use('/api/users', usersRouter);

app.use('/api/v1', apiRouter);
app.use('/api/brands', brandsRouter);
app.use('/api/articles', articlesRouter);
app.use('/api/models', modelsRouter);
app.use('/api/v2/models', photosRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
