const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const db = require("./models");
const app = express();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-naiex9c2.us.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'http://localhost:3001/api',
  issuer: `https://dev-naiex9c2.us.auth0.com/`,
  algorithms: ['RS256']
});

// Add checkJwt as a param to the api route to make the api require an auth token
//
// // This route doesn't need authentication
// app.get('/api/public', function(req, res) {
//   res.json({
//     message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
//   });
// });

// // This route needs authentication
// app.get('/api/private', checkJwt, function(req, res) {
//   res.json({
//     message: 'Hello from a private endpoint! You need to be authenticated to see this.'
//   });
// });

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve Static Assests to Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Requiring api routes
require("./controllers/apiRoutes")(app);

// app.get("/api/results", function (req, res) {
//   db.Item.findAll().then(function (dbItems) {
//     res.json(dbItems);
//   });
// });

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
