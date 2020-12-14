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
      itemName: req.body.itemName,
      itemDescription: req.body.itemDescription,
      image: req.body.image,
      category: req.body.category,
      rentalFee: req.body.rentalFee,
      maxRentalDuration: req.body.maxRentalDuration,
      email: req.body.email,
      phone: req.body.phone,
      preferredContact: req.body.preferredContact,
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
