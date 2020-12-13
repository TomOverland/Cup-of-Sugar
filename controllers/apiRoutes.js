const db = require('../models');
// const Items = db.items;
const Users = db.users;
// const Op = db.Sequelize.Op; // Operators
// documentation: https://sequelize.org/v5/manual/querying.html

module.exports = function (app) {
  // get all items
  app.get('/api/results', function (req, res) {
    db.Item.findAll().then(function (dbItems) {
      res.json(dbItems);
    });
  });

  // Create a new item listing
  app.post('/api/item/postnewitem', function (req, res) {
    db.Item.create({
      itemName: 'fetchtest',
      itemDescription: 'testy',
      image: 'imagelink',
      category: 'testcat',
      rentalFee: 1,
      maxRentalDuration: '2day',
      email: 'my@email.com',
      phone: '4444444',
      preferredContact: 'No Preference',
      availableStatus: true,
    })
      .then(function (result) {
        console.log('item posted sucessfully');
        res.sendStatus(200);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
};
