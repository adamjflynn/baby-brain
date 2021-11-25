const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our action model
class Action extends Model {
}

// create fields/columns for action model
Action.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Action'
    },
);

module.exports = Action;