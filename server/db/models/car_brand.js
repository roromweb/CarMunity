const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car_brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Car_model, { foreignKey: 'car_brand_id' });
    }
  }
  Car_brand.init({
    name: DataTypes.STRING,
    logo: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Car_brand',
  });
  return Car_brand;
};
