const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Item extends Model {
        static associate(models) {
            Item.belongsTo(models.Category)
            Item.belongsToMany(models.Uom, { through: 'ItemUom' })
        }
    }
    Item.init(
        {
            item_id: {
                primaryKey: true,
                type: DataTypes.UUID,
            },
            item_name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            category: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'Category',
                    key: 'cat_id',
                },
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },
        },
        {
            sequelize,
            modelName: 'Item',
            tableName: 'app_items'
        }
    );
    return Item;
};
