const express = require('express');
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path')
const routes = require('./routes')
const app = express();
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};



// const hbs = exphbs.create({});

// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: false})); // makes it so tables dont clear after every fresh load
app.use(express.static(path.join(__dirname, 'public/assets')));

app.use(session(sess));
app.use(routes)

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});
