const express = require('express');
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
// Requiring api routes
require('./controllers/apiRoutes')(app);


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

