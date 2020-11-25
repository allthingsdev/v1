module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Transactions', {
            trans_id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('uuid_generate_v4()'),
            },
            trans_type: {
                type: Sequelize.UUID,
            },
            item: {
                type: Sequelize.UUID,
            },
            quantity: {
                type: Sequelize.INTEGER,
            },
            uom: {
                type: Sequelize.UUID,
            },
            unit_price: {
                type: Sequelize.INTEGER,
            },
            total_price: {
                type: Sequelize.INTEGER,
            },
            mode: {
                type: Sequelize.UUID,
            },
            place: {
                type: Sequelize.UUID,
            },
            for: {
                type: Sequelize.UUID,
            },
            notes: {
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
        await queryInterface.dropTable('Transactions');
    },
};
