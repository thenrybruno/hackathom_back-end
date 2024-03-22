import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'caluthi_development',
    username: 'caluthi',
    password: 'caluthi',
    define: {
        underscored: true
    }
})