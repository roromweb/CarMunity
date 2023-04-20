const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Post, { foreignKey: 'user_id' });
      this.hasMany(models.Like_post, { foreignKey: 'user_id' });
      this.hasMany(models.Comment, { foreignKey: 'user_id' });
      this.hasMany(models.Favorite_post, { foreignKey: 'user_id' });
      this.hasMany(models.Subscribe, { foreignKey: 'user_id' });
      this.hasMany(models.Photo, { foreignKey: 'user_id' });
      this.hasMany(models.Like_comment, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    about: DataTypes.TEXT,
    tg: DataTypes.TEXT,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
