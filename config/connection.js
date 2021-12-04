
const Sequelize = require('sequelize');

require('dotenv').config();



const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PW
});


module.exports = sequelize;
