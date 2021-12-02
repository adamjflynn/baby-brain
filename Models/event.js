const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our event model
class Event extends Model {
}

// create fields/columns for event model
Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        /*action_name: {
            type: DataTypes.STRING,
            allowNull: false
        },*/
        baby_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Baby',
                    key: 'id'
                }
            },
        note: {
                type: DataTypes.TEXT,
                allowNull: false
        
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Event'
    }
);

module.exports = Event;