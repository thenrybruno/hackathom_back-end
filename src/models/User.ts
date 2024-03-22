import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface User {
    id: number
    name: string
    email: string
    password: string
}

export interface UserCreationAttributes extends Optional<User, 'id'> { }

export interface UserInstance extends Model<User, UserCreationAttributes>, User { }

export const User = sequelize.define<UserInstance, User>('User', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
})