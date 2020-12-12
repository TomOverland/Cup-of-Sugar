const db = require("../models");
const Items = db.items;
const Users = db.users;
const Op = db.Sequelize.Op; // Operators
// documentation: https://sequelize.org/v5/manual/querying.html

// get all items
app.get("/api/results", function(req, res) {
    Items.findAll({}).then(function(dbItems) {
      res.json(dbItems);
    });
  });