'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const carBrands = [
      {
        name: 'Toyota',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'BMW',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mercedes-Benz',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Honda',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ford',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Volkswagen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Audi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nissan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chevrolet',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hyundai',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Brands', carBrands, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
