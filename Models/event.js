const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our event model
class event extends Model {
}

// create fields/columns for event model
event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        action_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'action',
                key: 'id'
            },
        },
        baby_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'baby',
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
        modelName: 'event'
    }
);

module.exports = event;