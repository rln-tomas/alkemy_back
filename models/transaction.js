'use strict';
const {
  Model
} = require('sequelize');
const transactionRouter = require('../api/routes/transaction.routes');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.user)
    }
  };
  transaction.init({
    concept: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    type: DataTypes.STRING,
    date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'transaction',
  }); 
  return transaction;
};