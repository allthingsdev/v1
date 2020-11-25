const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        
        static associate(models) {
            
        }
    }
    Category.init(
        {
            cat_id: {
                primaryKey: true,
                type: DataTypes.UUID,
            },
            cat_name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            cat_desc: {
                type: DataTypes.STRING,
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
            modelName: 'Category',
            tableName: 'app_categories'
        }
    );
    return Category;
};
