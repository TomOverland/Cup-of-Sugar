'use strict';
const Sequelize = require('sequelize');

const rentableItems = [
  {
    itemName: 'Wheelbarrow',
    itemDescription:
      'Heavy duty, 6 cubit feet capacity, steel tray ACE wheelbarrow to suit almost any heavy duty project. Use to haul gravel, sand, stone, concrete.',
    image:
      'https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/c77d5b8e-03eb-40ee-acb6-b60e051ea4fd?_mzcb=_1606525719704',
    category: 'Lawn and Garden',
    rentalFee: 15,
    maxRentalDuration: '2 months',
    email: 'carl-the-contractor@hotmail.com',
    phone: '5556261562',
    preferredContact: 'Email',
    availableStatus: true,
    UserId: 2,
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', rentableItems, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(Item, rentableItems, {});
  },
};
