const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Uom extends Model {
        static associate(models) {
            Uom.belongsToMany(models.Item, { through: 'ItemUom' })
        }
    }
    Uom.init(
        {
            uom_id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },
            uom_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            uom_abbr: {
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            sequelize,
            modelName: 'Uom',
            tableName: 'app_uom'
        }
    );
    return Uom;
};
