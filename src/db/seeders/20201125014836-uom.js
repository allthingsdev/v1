'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        await queryInterface.bulkInsert('app_uom', [
            {
                uom_name: 'piece(s)',
                uom_abbr: 'pcs',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                uom_name: 'unit(s)',
                uom_abbr: 'unit',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                uom_name: 'kilogram(s)',
                uom_abbr: 'kgs',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                uom_name: 'gram(s)',
                uom_abbr: 'gms',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                uom_name: 'packet(s)',
                uom_abbr: 'pkt',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                uom_name: 'boxes',
                uom_abbr: 'bxs',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
