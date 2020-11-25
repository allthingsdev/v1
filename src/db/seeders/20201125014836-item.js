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
       await queryInterface.bulkInsert('app_items', [
           {
               item_name: 'Home-Yaya',
               category: '929ba271-56d6-4db3-b7a9-58960487eec2',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Water Bill',
               category: 'c81b652a-96db-461f-a1c8-ce8f9ffe195b',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Cooking Oil',
               category: 'ec9a956c-b455-4298-8065-b590d3591ea6',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Spinach',
               category: 'fb95f6b2-bcec-4b29-b6ec-d0761a0b3827',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Salt',
               category: 'ec9a956c-b455-4298-8065-b590d3591ea6',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Tissues',
               category: 'f2e98b52-4cb8-47b8-8637-335307e23b90',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Jeans',
               category: '1748f11a-088c-4d68-8d24-f14cd988fe28',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Socks',
               category: '1748f11a-088c-4d68-8d24-f14cd988fe28',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Green Grams',
               category: 'ec9a956c-b455-4298-8065-b590d3591ea6',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Water Melon',
               category: '9064c587-c589-4d86-92c2-42ac12007f5f',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Bananas',
               category: '9064c587-c589-4d86-92c2-42ac12007f5f',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Oranges',
               category: '9064c587-c589-4d86-92c2-42ac12007f5f',
               createdAt: new Date(),
               updatedAt: new Date(),
           },
           {
               item_name: 'Royco Cubes',
               category: 'ec9a956c-b455-4298-8065-b590d3591ea6',
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
