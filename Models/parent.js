const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const argon2 = require('argon2');

// create our parent model
class Parent extends Model {
    async checkPassword(loginPw) {
        try {
            let correctPassword = await argon2.verify(this.password, loginPw)
            return correctPassword
        } catch (err) {
            console.log(err);
            throw e;
        }
    }
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
        username: {
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
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await argon2.hash(newUserData.password, {
                    type: argon2.argon2id,
                    hashLength: 32

                });
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await argon2.hash(updatedUserData.password, {
                    type: argon2.argon2id,
                    hashLength: 32
                });
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Parent'
    }
);

module.exports = Parent;