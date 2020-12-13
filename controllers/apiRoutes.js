const db = require("../models");
const Op = db.Sequelize.Op; // Operators
const express = require("express");
// documentation: https://sequelize.org/v5/manual/querying.html

const app = express();
// get all items
app.get("/api/results", function (req, res) {
  db.Item.findAll().then(function (dbItems) {
    res.json(dbItems);
  });
});

// Create a new item listing
// app.post('/api/item/postnewitem', function (req, res) {
//   db.Item.create({
//     itemName:
//     itemDescription:
//     image:
//     category:
//     rentalFee:
//     maxRentalDuration:
//     email:
//     phone:
//     preferredContact:

//   })
// })
