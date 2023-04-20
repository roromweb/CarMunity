const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Car_model, { foreignKey: 'car_model_id' });
      this.hasMany(models.Comment, { foreignKey: 'post_id' });
      this.hasMany(models.Like_post, { foreignKey: 'post_id' });
      this.hasMany(models.Post_tag, { foreignKey: 'post_id' });
      this.hasMany(models.Favorite_post, { foreignKey: 'post_id' });
    }
  }
  Post.init({
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    img: DataTypes.TEXT,
    car_model_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
