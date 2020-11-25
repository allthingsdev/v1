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
        await queryInterface.bulkInsert('app_categories', [
            {
                cat_name: 'Groceries',
                cat_desc: '',
                createdAt: new Date(),
                updatedAt: new Date(),

            },
            {
                cat_name: 'Toiletries',
                cat_desc: '',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                cat_name: 'Vegetables',
                cat_desc: '',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                cat_name: 'Utilities',
                cat_desc: '',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                cat_name: 'Personal Effects',
                cat_desc: '',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                cat_name: 'Transport',
                cat_desc: '',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                cat_name: 'Fruits',
                cat_desc: '',
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
        await queryInterface.bulkDelete('app_categories', null, {});
    }
};
