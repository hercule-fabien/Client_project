const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Card, { foreignKey: 'cardId' });
    }
  }
  Progress.init({
    isLearned: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Progress',
  });
  return Progress;
};
