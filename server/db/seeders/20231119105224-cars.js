'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const carsData = [];

    for (let i = 0; i < 20; i++) {
      const randomModelIndex = Math.floor(Math.random() * 15) + 1;
      const randomUserId = Math.floor(Math.random() * 10) + 1;

      carsData.push({
        modelId: randomModelIndex,
        userId: randomUserId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Cars', carsData,{});
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
