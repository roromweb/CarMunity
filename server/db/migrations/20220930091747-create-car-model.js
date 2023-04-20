module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Car_models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.TEXT,
        defaultValue: '/NotCarPic.jpg',
      },
      description: {
        type: Sequelize.TEXT,
        defaultValue: 'Тут будет описание!',
      },
      banner: {
        type: Sequelize.TEXT,
        defaultValue: 'Тут будет баннер!',
      },
      car_brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Car_brands',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Car_models');
  },
};
