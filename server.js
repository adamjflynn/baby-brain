const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes')


const sequelize = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({extended: false})); // makes it so tables dont clear after every fresh load
app.use(express.static(path.join(__dirname, 'public/assets')));



app.use(routes)


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('listening on port 3001'));
  });