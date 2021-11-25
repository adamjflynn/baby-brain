const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our action model
class action extends Model {
}

// create fields/columns for action model
action.init(
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
        modelName: 'action'
    },
);

module.exports = action;