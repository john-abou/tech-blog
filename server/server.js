// Import dependencies
const express = require("express");
const session = require("express-session");
const routes = require("./routes");
const exphbs = require('express-handlebars');
const sequelize = require("./config/connection");
const path = require("path");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const handlebarHelpers = require('./helpers/helpers.js')

// Declare app variables
const app = express();
const PORT = process.env.PORT || 3001;
const staticPath = path.join(__dirname, "../client/public");

// Configure server sessions and tell the app to use the session object
const sess = {
  secret: "Super secret secret", // secret key to sign the session ID cookie
  cookie: {
    maxAge: 1000 * 60 * 60, // 1 hour
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false, // If the session object isn't modified from a request, do not resave the session
  saveUninitialized: true, // Saves all new session objects, even if they are not modified after creation
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPath));

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({helpers: handlebarHelpers});
app.engine("handlebars", hbs.engine); // registers the handlebars engine
app.set("view engine", "handlebars"); // sets the default view engine as handlebars
app.set('views', path.join(__dirname, "../client/views")); //location of  views folder

// Turn on routes
app.use(routes);

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on http://localhost:3001"));
});
