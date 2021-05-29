'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User); 
    }
  };
  Transaction.init({
    concept: DataTypes.STRING,
    date: DataTypes.DATE,
    amount: DataTypes.FLOAT,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
    timestamps: false
  });
  return Transaction;
};