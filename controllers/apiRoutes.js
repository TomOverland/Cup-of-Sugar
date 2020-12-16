const db = require('../models');
// const Items = db.items;
const User = db.user;
const Op = db.Sequelize.Op; // Operators
// documentation: https://sequelize.org/v5/manual/querying.html

module.exports = function (app) {
  // get all items
  app.get('/api/results', function (req, res) {
    db.Item.findAll().then(function (dbItems) {
      res.json(dbItems);
    });
  });

  // Filter by category
  app.get('/api/results/filtered/:category', function (req, res) {
    console.log('in app.get', req.params.category);
    reqArr = req.params.category.split(',');
    console.log('after split', reqArr);
    db.Item.findAll({
      where: {
        category: [reqArr],
      },
    })
      .then(function (results) {
        console.log('items', results);
        res.json(results);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

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

  // Get all users
  app.get('/api/users/', function (req, res) {
    db.User.findAll().then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get single user
  app.get('/api/user/:id', function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then(function (result) {
        console.log('user: ', result);
        res.json(result);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  // Create new user
  app.post('/api/newuser/', function (req, res) {
    db.User.create({
      email: req.body.email,
      auth0id: req.body.auth0id,
    })
      .then(function (result) {
        console.log('user added to database');
        res.sendStatus(200);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
};
