const { Car_brand } = require('./models');

async function brandList() {
  const brandListTemp = await Car_brand.findAll({ raw: true });
  return brandListTemp;
}

module.exports = { brandList };
