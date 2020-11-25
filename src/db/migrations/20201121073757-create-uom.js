module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('app_uom', {
            uom_id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('uuid_generate_v4()'),
            },
            uom_name: {
                type: Sequelize.STRING,
            },
            uom_abbr: {
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
            tableName: 'app_uom',
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('app_uom');
    },
};
