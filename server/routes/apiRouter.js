/* eslint-disable camelcase */
const express = require('express');
const bcrypt = require('bcrypt');
const {
  User,
  Subscribe,
  Car_model,
  Car_brand,
  Post,
  Like_post,
  Favorite_post,
} = require('../db/models');

// import upload from '../middlewares/multer';

const router = express.Router();

router.post('/user', async (req, res) => {
  const hashpassword = await bcrypt.hash(req.body.password, 10);
  const [currentUser, created] = await User.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      password: hashpassword,
      name: req.body.name,
    },
  });
  if (!created) res.sendStatus(500);
  else {
    const { name, email, id, img, about, tg } = currentUser.dataValues;
    req.session.userName = name;
    req.session.email = email;
    req.session.userId = id;
    req.session.img = img;
    req.session.userAbout = about;
    req.session.userTg = tg;
    res.json({ name, email, id, img, about, tg });
  }
});

router.post('/login', async (req, res) => {
  const databaseUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (
    databaseUser &&
    (await bcrypt.compare(req.body.password, databaseUser.password))
  ) {
    const sessionData = {
      name: databaseUser.name,
      email: databaseUser.email,
      id: databaseUser.id,
      img: databaseUser.img,
      about: databaseUser.about,
      tg: databaseUser.tg,
    };
    req.session.userName = databaseUser.name;
    req.session.email = databaseUser.email;
    req.session.userId = databaseUser.id;
    req.session.userAbout = databaseUser.about;
    req.session.img = databaseUser.img;
    req.session.userTg = databaseUser.tg;
    res.json(sessionData);
  } else res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  res.clearCookie('sid');
  req.session.destroy();
  res.sendStatus(200);
});

router.get('/auth', (req, res) => {
  if (!req.session.userId) {
    res.sendStatus(401);
    return;
  }

  const sessionData = {
    name: req.session.userName,
    email: req.session.email,
    id: req.session.userId,
    img: req.session.img,
    about: req.session.userAbout,
    tg: req.session.userTg,
  };

  res.json(sessionData);
});

router.get('/myCommunity', async (req, res) => {
  if (!req.session.userId) {
    res.sendStatus(401);
    return;
  }
  const user = req.session.userId;
  console.info('\x1b[34m%s\x1b[0m', 'Сработала ручка myCommunity');
  const myCommunity = await Subscribe.findAll({
    where: {
      user_id: user,
    },
    include: [
      {
        model: Car_model,
        attributes: ['name', 'img', 'id'],
        include: [
          {
            model: Car_brand,
            attributes: ['name', 'id'],
          },
        ],
      },
    ],
  });

  res.json(myCommunity);
});

router.get('/myPosts', async (req, res) => {
  const user = req.session.userId;
  console.info('\x1b[34m%s\x1b[0m', 'Сработала ручка myPosts');
  const myPosts = await Post.findAll({
    where: {
      user_id: user,
    },
    include: { model: User },
  });

  res.json(myPosts);
});

router.get('/favoritePosts', async (req, res) => {
  const user = req.session.userId;
  console.info('\x1b[34m%s\x1b[0m', 'Сработала ручка favoritePosts');
  const myFavPosts = await Favorite_post.findAll({
    where: {
      user_id: user,
    },
    include: [
      {
        model: Post,
        attributes: ['title', 'text', 'img', 'updatedAt', 'id'],
      },
    ],
  });
  const favPosts = myFavPosts.map(el => ({
    img: el.Post.img,
    text: el.Post.text,
    title: el.Post.title,
    updatedAt: el.Post.updatedAt,
    id: el.Post.id,
  }));

  res.json(favPosts);
});

module.exports = router;
