/* eslint-disable max-len */
/* eslint-disable camelcase */
const { request } = require('express');
const express = require('express');
const { Sequelize } = require('sequelize');
const { Op } = require('sequelize');
const { Post, Like_post, User, Favorite_post, Comment } = require('../db/models');
const fileMiddleware = require('../middleWares/multerByFil');

const router = express.Router();


router.post('/search/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const { input } = req.body;
  const postsWithCommentsCount = await Post.findAll({
    where: {
      car_model_id: modelId,
      text: {
        [Op.like]: `%${input}%`,
      },
    },
    attributes: {
      include: [
        [Sequelize.fn('COUNT', Sequelize.col('Comments.id')), 'commentsCount'],
      ],
    },
    include: [
      { model: User },
      { model: Comment, attributes: [] }],
    group: [
      'Post.id',
      'User.id',
    ],
  });
  const likes = await Post.findAll({
    where: {
      car_model_id: modelId,
      text: {
        [Op.like]: `%${input}%`,
      },
    },
    attributes: {
      include: [
        [Sequelize.fn('COUNT', Sequelize.col('Like_posts.id')), 'likesCount'],
      ],
    },
    include: [
      { model: User, attributes: [] },
      { model: Like_post, attributes: [] },
    ],
    group: [
      'Post.id',
      'User.id',
    ],
  });
  const arrayNew = postsWithCommentsCount.map((el, ind) => ({ ...JSON.parse(JSON.stringify(el)), ...JSON.parse(JSON.stringify(likes[ind])) }));
  const reverseArr = arrayNew.reverse();
  res.json(reverseArr);
});


router.post('/:modelId', fileMiddleware.single('post-photo'), async (req, res) => {
  const { modelId } = req.params;
  const { title, text } = req.body;
  const user = req.session.userId;
  const fixPath = req.file.path.substring(7);
  try {
    const newPost = await Post.create({ title, text, img: fixPath, car_model_id: modelId, user_id: user });
    const postWithUser = await Post.findOne({ where: { id: newPost.id }, include: { model: User } });
    res.json(postWithUser);
  } catch (error) {
    console.error(error);
  }
});


router.post('/favorite/:postId', async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.session;
  if (!req.session.userId) {
    res.sendStatus(401);
    return;
  }
  if (!postId) {
    res.sendStatus(401);
    return;
  }
  try {
    const [favPost, created] = await Favorite_post.findOrCreate({
      where: { post_id: postId, user_id: userId }, include: { model: User },
    });
    if (created) {
      res.sendStatus(200);
    } else {
      favPost.destroy();
      res.sendStatus(200);
    }
  } catch (error) {
    console.error(error);
  }
});


router.post('/like/:postId', async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.session;
  try {
    const [likePost, created] = await Like_post.findOrCreate({
      where: { post_id: postId, user_id: userId },
    });
    if (created) {
      res.sendStatus(200);
    } else {
      likePost.destroy();
      res.sendStatus(200);
    }
  } catch (error) {
    console.error(error);
  }
});


router.get('/checklike/:postId', async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.session;
  try {
    const checkLikePost = await Like_post.findOne({
      where: { post_id: postId, user_id: userId },
    });
    if (checkLikePost) {
      res.json({ status: true });
    } else {
      res.json({ status: false });
    }
  } catch (error) {
    console.log(error);
  }
});


router.get('/checkfavorite/:postId', async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.session;
  try {
    const checkFavoritePost = await Favorite_post.findOne({
      where: { post_id: postId, user_id: userId },
    });
    if (checkFavoritePost) {
      res.json({ status: true });
    } else {
      res.json({ status: false });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/comments/:postId', async (req, res) => {
  const { text } = req.body;
  const { postId } = req.params;
  const { userId } = req.session;
  try {
    const newComment = await Comment.create({ post_id: postId, user_id: userId, text });
    const commentInclude = await Comment.findOne({ where: { id: newComment.id }, include: { model: User } });
    res.json(commentInclude);
  } catch (error) {
    console.error(error);
  }
});


router.get('/comments/:postId', async (req, res) => {
  const { postId } = req.params;
  try {
    const commentsByPost = await Comment.findAll({ where: { post_id: postId }, include: { model: User } });
    res.json(commentsByPost);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
