const { UUID } = require('sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ItemUom extends Model {
        static associate(models) {

        }
    }
    ItemUom.init(
        {
            iu_id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },
            item_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'Item',
                    key: 'item_id',
                },
                allowNull: false,
            },
            uom_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'Uom',
                    key: 'uom_id',
                },
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'ItemUom',
            tableName: 'app_item_uom',
        }
    );
    return ItemUom;
};
