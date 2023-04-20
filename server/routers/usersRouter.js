/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable camelcase */
const express = require('express');
const { Subscribe, User } = require('../db/models');

const router = express.Router();

router.post('/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const { userId } = req.session;
  console.info('\x1b[34m%s\x1b[0m', 'Сработала ручка Subscribe');
  try {
    const checkUser = await Subscribe.findOne({
      where: { user_id: userId, car_model_id: modelId },
    });
    if (!checkUser) {
      await Subscribe.create({ user_id: userId, car_model_id: modelId });
      const findSubscribe = await Subscribe.findOne({
        where: { user_id: userId, car_model_id: modelId },
        include: [{ model: User, attributes: ['name', 'img'] }],
      });
      res.json(findSubscribe);
    } else {
      await checkUser.destroy();
      res.json(userId);
    }
  } catch (error) {
    console.error(error);
  }
});

router.get('/:modelId', async (req, res) => {
  const { modelId } = req.params;
  console.info('\x1b[34m%s\x1b[0m', 'Сработала ручка SubscribeFind');
  try {
    const subscribes = await Subscribe.findAll({
      where: { car_model_id: modelId },
      include: [{ model: User, attributes: ['name', 'img'] }],
    });
    // console.log(subscribes);
    res.json(subscribes);
  } catch (error) {
    console.error(error);
  }
});

router.put('/about', async (req, res) => {
  const { userId } = req.session;
  const { about, tg, name } = req.body;
  // console.log('++++++++++++++++', about, userId);
  try {
    const user = await User.findOne({ where: userId });
    user.update({ about, tg });
    req.session.userAbout = about;
    req.session.userTg = tg;
    req.session.userName = name;
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

router.get('/:modelId/subscribe', async (req, res) => {
  try {
    const { userId } = req.session;
    const { modelId } = req.params;
    const checkUser = await Subscribe.findOne({
      where: { user_id: userId, car_model_id: modelId },
    });
    checkUser ? res.json({ state: true }) : res.json({ state: false });
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
