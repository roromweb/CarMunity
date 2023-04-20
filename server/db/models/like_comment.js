const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Comment, { foreignKey: 'comment_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Like_comment.init({
    user_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Like_comment',
  });
  return Like_comment;
};
