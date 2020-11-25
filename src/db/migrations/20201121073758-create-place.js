module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Places', {
            place_id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('uuid_generate_v4()'),
            },
            place_name: {
                type: Sequelize.STRING,
            },
            place_desc: {
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
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Places');
    },
};
