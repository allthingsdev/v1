'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Uom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Uom.init({
    uom_id: DataTypes.UUID,
    uom_name: DataTypes.STRING,
    uom_abbr: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Uom',
  });
  return Uom;
};