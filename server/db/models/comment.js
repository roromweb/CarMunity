const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Post, { foreignKey: 'post_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.Like_comment, { foreignKey: 'comment_id' });
    }
  }
  Comment.init({
    text: DataTypes.TEXT,
    img: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
