'use strict';
const Sequelize = require('sequelize');

const existingUsers = [
    {
        auth0_id: 'auth0|f3wt3wgm70m5erllabkitsc',
        userName: 'Paula Partyhard',
        userEmail: 'partyinpaula@partyhard.com',
    },
    {
        auth0_id: 'auth0|pgkp48rij1zr0qrprcb01m0',
        userName: 'Brody Broadhead',
        userEmail: 'brobro@brother.com',
    },
    {
        auth0_id: 'auth0|gztztbz1talguvrynbqzw1j',
        userName: 'Donald Dorkus',
        userEmail: 'donnieyoureoutofyourelement@thedude.com',
    },
    {
        auth0_id: 'auth0|luzyxngns4uhdfi9k66ilxx',
        userName: 'Martha Washington',
        userEmail: 'marthwash@gmail.com',
    },
    {
        auth0_id: 'auth0|125d6lpkpyxko71qgjibeq8',
        userName: 'Nancy Knowitall',
        userEmail: 'Nancyknowsall@wiser.com',
    },
    {
        auth0_id: 'auth0|pgkk48rij1zr0qrprcb01m2',
        userName: 'Bugger Borowitz',
        userEmail: 'bugbo@gmail.com',
    },
    {
        auth0_id: 'auth0|nztdtbz1talguvrynbqzw2j',
        userName: 'Veruca Salt',
        userEmail: 'saltybrat@wonka.com',
    },
    {
        auth0_id: 'auth0|lukyxngns5uhdfi9k66ilxx',
        userName: 'Marcelle LeShell',
        userEmail: 'withshoeson@ocean.com',
    },
    {
        auth0_id: 'auth0|m2wt3wgm70m5erllabkitsc',
        userName: 'Paula Paulson',
        userEmail: 'pauliepaul@gmail.com',
    },
    {
        auth0_id: 'auth0|124d6lpkprxko71qgjibeq8',
        userName: 'Dennis Conrad',
        userEmail: 'dennyconnie@gmail.com',
    },
    {
        auth0_id: 'auth0|k2dt3wgm70m5erllabkitzc',
        userName: 'Milhouse VonHooten',
        userEmail: 'millyhoot@gmail.com',
    },
    {
        auth0_id: 'auth0|f7wb4wgm70m5erllabkit0c',
        userName: 'Bob Loblaw LeShell',
        userEmail: 'bobloblaw@law.com',
    },
    {
        auth0_id: 'auth0|b2w63wgm70m5erllabkits9',
        userName: 'phalenthegrey',
        userEmail: 'consolelog@life.com',
    },

];

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', existingUsers, {});
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete(User, existingUsers, {});
    },
  };
  