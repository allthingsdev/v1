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
    }
  };
  Transaction.init({
    trans_id: DataTypes.UUID,
    trans_type: DataTypes.UUID,
    item: DataTypes.UUID,
    quantity: DataTypes.INTEGER,
    uom: DataTypes.UUID,
    unit_price: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    mode: DataTypes.UUID,
    place: DataTypes.UUID,
    for: DataTypes.UUID,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};