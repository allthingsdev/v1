module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('app_categories', {
            cat_id: {
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('uuid_generate_v4()')
            },
            cat_name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            cat_desc: {
                type: Sequelize.STRING,
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
            tableName: 'app_categories'
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Categories');
    },
};
