const bazaAuto = require('../marks_json');
const deskListArr = require('../description');
const { brandList } = require('../brandList');

module.exports = {
  async up(queryInterface, Sequelize) {
    const temp = await brandList();
    const modelList = temp.map((brand) => (bazaAuto[brand.name].map((model) => (
      {
        name: model,
        img: `/IMG/Models/${brand.name}-${model}.jpeg`,
        description: deskListArr[model],
        banner: `/IMG/Banner/${brand.name}-${model}.jpg`,
        car_brand_id: brand.id,
      }
    ))));

    await queryInterface.bulkInsert(
      'Car_models',
      modelList.flat(),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Car_models', null, {});
  },
};
