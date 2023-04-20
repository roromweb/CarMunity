/* eslint-disable camelcase */
const express = require('express');
const { Car_brand } = require('../db/models');

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    const brands = await Car_brand.findAll();
    res.json(brands);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
