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
        event_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        parent_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Parent',
                key: 'id'
            }
        },
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