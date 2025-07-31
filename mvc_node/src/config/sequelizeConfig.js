const {Sequelize} = require('sequelize');

require('dotenv').config();
const sequelize = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,//process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:'mysql',
    }
);

async function connectDB(){
    try {
        await sequelize.authenticate();
        console.log('Conexion a la base de datos MySQL con Sequelize establecida correctamente.')
    } catch (error) {
        console.error('Error al conectar a la base de datos con Sequelize:', error);
        process.exit(1);
    }
}

module.exports = { sequelize, connectDB};