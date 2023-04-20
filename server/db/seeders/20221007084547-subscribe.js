module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Subscribes', [{
      car_model_id: '146',
      user_id: '1',
    },
    {
      car_model_id: '146',
      user_id: '2',
    },
    {
      car_model_id: '146',
      user_id: '3',
    },
    {
      car_model_id: '146',
      user_id: '4',
    },
    {
      car_model_id: '146',
      user_id: '5',
    },
    {
      car_model_id: '146',
      user_id: '6',
    },
    {
      car_model_id: '146',
      user_id: '7',
    },
    {
      car_model_id: '146',
      user_id: '8',
    },
    {
      car_model_id: '146',
      user_id: '9',
    },
    {
      car_model_id: '146',
      user_id: '10',
    },
    {
      car_model_id: '146',
      user_id: '11',
    },
    {
      car_model_id: '146',
      user_id: '12',
    },
    {
      car_model_id: '61',
      user_id: '1',
    },
    {
      car_model_id: '61',
      user_id: '2',
    },
    {
      car_model_id: '61',
      user_id: '3',
    },
    {
      car_model_id: '61',
      user_id: '4',
    },
    {
      car_model_id: '61',
      user_id: '5',
    },
    {
      car_model_id: '61',
      user_id: '6',
    },
    {
      car_model_id: '61',
      user_id: '7',
    },
    {
      car_model_id: '61',
      user_id: '8',
    },
    {
      car_model_id: '61',
      user_id: '9',
    },
    {
      car_model_id: '61',
      user_id: '10',
    },
    {
      car_model_id: '61',
      user_id: '11',
    },
    {
      car_model_id: '61',
      user_id: '12',
    },
    {
      car_model_id: '61',
      user_id: '13',
    },
    {
      car_model_id: '61',
      user_id: '14',
    },
    {
      car_model_id: '61',
      user_id: '15',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Subscribes', null, {});
  },
};
