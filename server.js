const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.use(require('./routes/'));

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});