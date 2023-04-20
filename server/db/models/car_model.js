const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car_model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Car_brand, { foreignKey: 'car_brand_id' });
      this.hasMany(models.Subscribe, { foreignKey: 'car_model_id' });
      this.hasMany(models.Photo, { foreignKey: 'car_model_id' });
      this.hasMany(models.Article, { foreignKey: 'car_model_id' });
      this.hasMany(models.Post, { foreignKey: 'car_model_id' });
    }
  }
  Car_model.init({
    name: DataTypes.STRING,
    img: DataTypes.TEXT,
    description: DataTypes.TEXT,
    banner: DataTypes.TEXT,
    car_brand_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Car_model',
  });
  return Car_model;
};
