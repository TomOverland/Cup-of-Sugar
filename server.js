const express = require('express');
// const routes = require('./routes');

const PORT = process.env.PORT || 3007;
const db = require('./models');
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve Static Assests to Heroku
if (process.env.NODE_eNV === 'production') {
  app.use(express.static('client/build'));
}

// Defining API routes
// app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});