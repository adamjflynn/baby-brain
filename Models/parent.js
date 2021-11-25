const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our parent model
class Parent extends Model {
}

// create fields/columns for Parent model
Parent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            },
        },
    },
    {
        sequelize,
        timestamps:true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Parent'
    }
);

module.exports = Parent;