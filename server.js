const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
//const session = require('express-session');
//const exphbs = require('express-handlebars');
const routes = require('./routes')
const path = require('path')


const sequelize = require("./config/connection");


app.use(express.json());
app.use(express.urlencoded({extended: false})); // makes it so tables dont clear after every fresh load
app.use(express.static(path.join(__dirname, 'public/assets')));



app.use(routes)

app.use(require('./routes/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});
