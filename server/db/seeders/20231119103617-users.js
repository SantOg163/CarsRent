'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const usersData = [
      {
        name: 'Иван Иванов',
        phone: '79990000001',
        email: 'ivan@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Екатерина Петрова',
        phone: '79990000002',
        email: 'ekaterina@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Александр Сидоров',
        phone: '79990000003',
        email: 'alexander@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Анна Кузнецова',
        phone: '79990000004',
        email: 'anna@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Максим Васильев',
        phone: '79990000005',
        email: 'maxim@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'София Ильина',
        phone: '79990000006',
        email: 'sofia@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дмитрий Козлов',
        phone: '79990000007',
        email: 'dmitriy@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Алиса Николаева',
        phone: '79990000008',
        email: 'alisa@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Павел Морозов',
        phone: '79990000009',
        email: 'pavel@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ольга Смирнова',
        phone: '79990000010',
        email: 'olga@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Users', usersData, {});
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
