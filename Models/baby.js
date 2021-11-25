const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our baby model
class Baby extends Model {
  }

// create fields/columns for baby model
Baby.init(
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
      parent_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Parent',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps:true,
      freezeTableName: true,
      underscored: true,
      modelName: 'Baby'
    }
  );

  module.exports = Baby;