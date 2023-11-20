'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const carModelsData = [
      {
        brandId: 1,
        name: 'Corolla',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 1,
        name: 'Camry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 1,
        name: 'RAV4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 2,
        name: '3 Series',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 2,
        name: '5 Series',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 2,
        name: 'X5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 3,
        name: 'C-Class',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 3,
        name: 'E-Class',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 3,
        name: 'S-Class',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 4,
        name: 'Accord',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 4,
        name: 'Civic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 5,
        name: 'Focus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 5,
        name: 'Mustang',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 6,
        name: 'Golf',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 6,
        name: 'Passat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('CarModels', carModelsData, {});
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
