'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const rentData = [];

    for (let i = 0; i < 20; i++) {
      const randomCarId = Math.floor(Math.random() * 20) + 1;
      const randomUserId = Math.floor(Math.random() * 10) + 1;

      rentData.push({
        carId: randomCarId,
        userId: randomUserId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Rents', rentData, {});
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
