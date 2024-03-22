import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"


export interface Service {
    id: number
    serviceName: string
    description: string
    durationTime: number
    price: number
    userId: number
}

export interface ServiceCreationAttributes extends Optional<Service, 'id' | 'price'> { }

export interface ServiceInstance extends Model<Service, ServiceCreationAttributes>, Service { }

export const Service = sequelize.define<ServiceInstance, Service>('Service', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    serviceName: {
        allowNull: false,
        type: DataTypes.STRING
    },

    description: {
        allowNull: false,
        type: DataTypes.TEXT
    },

    durationTime: {
        allowNull: false,
        type: DataTypes.INTEGER
    },

    price: {
        type: DataTypes.INTEGER
    },

    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    }
})