const express = require('express');
<<<<<<< HEAD
const path = require('path');
const PORT = 3001;
=======
const PORT = process.env.PORT || 3001;
>>>>>>> bae55db821ebdf3d4074b887691c9d895386d8be
const app = express();
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes')


const sequelize = require("./config/connection");

const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({extended: false})); // makes it so tables dont clear after every fresh load
app.use(express.static(path.join(__dirname, 'public/assets')));



app.use(routes)

app.use(require('./routes/'));

sequelize.sync({ force: false }).then(() => {
<<<<<<< HEAD
    app.listen(PORT, () => console.log('listening on port 3001'));
  });
=======
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});
>>>>>>> bae55db821ebdf3d4074b887691c9d895386d8be
