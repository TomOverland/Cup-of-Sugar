const db = require('../models');
// const Items = db.items;
const User = db.user;
// const Op = db.Sequelize.Op; // Operators
// documentation: https://sequelize.org/v5/manual/querying.html

module.exports = function (app) {
  // get all items
  app.get('/api/results', function (req, res) {
    db.Item.findAll().then(function (dbItems) {
      res.json(dbItems);
    });
  });

  // Filter by category
  // app.get('/api/results/filtered', function (req, res) {
  //   db.Item.findAll({
  //     where: {
  //       [Op.or]: [
  //         {category: req.body.}
  //       ]
  //     }
  //   })
  // })

  // Get item by ID
  app.get('/api/result/:id', function (req, res) {
    db.Item.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then(function (result) {
        console.log('item', result);
        res.json(result);
      })
      .catch(function (err) {
        console.log(err);
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

  // Delete an item listing
  app.delete('/api/deleteitem/:id', function (req, res) {
    db.Item.destroy({
      where: {
        id: req.body.id,
      },
    })
      .then(function (result) {
        console.log('Item was successfully deleted');
        res.sendStatus(200);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
};
