'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('app_item_uom', {
            iu_id: {
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('uuid_generate_v4()'),
            },
            item_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'app_items',
                    key: 'item_id',
                },
                allowNull: false,
            },
            uom_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'app_uom',
                    key: 'uom_id',
                },
                allowNull: false,
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
            tableName: 'app_item_uom'
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('app_item_uom');
    }
};
