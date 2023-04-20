const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Car_model, { foreignKey: 'car_model_id' });
    }
  }
  Article.init({
    title: DataTypes.TEXT,
    text: DataTypes.TEXT,
    img: DataTypes.TEXT,
    car_model_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};
