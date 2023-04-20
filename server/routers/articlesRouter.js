/* eslint-disable camelcase */
const express = require('express');
const { Article, Car_model } = require('../db/models');

const router = express.Router();

router.get('/:modelId', async (req, res) => {
  const { modelId } = req.params;

  try {
    const article = await Article.findAll({
      raw: true,
      where: { car_model_id: modelId },
      include: { model: Car_model },
    });

    res.json(article);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
