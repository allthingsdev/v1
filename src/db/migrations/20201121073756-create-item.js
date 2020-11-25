module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('app_items', {
            item_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('uuid_generate_v4()'),
            },
            item_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            category: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'app_categories',
                    key: 'cat_id',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        },
        {
            tableName: 'app_items'
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('app_items');
    },
};
