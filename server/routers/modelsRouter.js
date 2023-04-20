/* eslint-disable camelcase */
const express = require('express');

const { Car_model, Car_brand } = require('../db/models');

const router = express.Router();

router.get('/:brandId', async (req, res) => {
  const { brandId } = req.params;

  try {
    const models = await Car_model.findAll({
      raw: true,
      where: { car_brand_id: brandId },
    });

    res.json(models);
  } catch (error) {
    console.error(error);
  }
});

router.get('/modelslist/:brandId', async (req, res) => {
  const { brandId } = req.params;

  try {
    const models = await Car_model.findAll({
      raw: true,
      where: { car_brand_id: brandId },
    });
    const modelList = models.map(brand => ({
      label: brand.name,
      id: brand.id,
    }));

    res.json(modelList);
  } catch (error) {
    console.error(error);
  }
});

router.get('/model/:modelId', async (req, res) => {
  const { modelId } = req.params;

  try {
    const model = await Car_model.findOne({
      where: { id: modelId },
      include: { model: Car_brand },
    });
    res.json(model);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
