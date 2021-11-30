const Sequelize = require('sequelize');
const database = require('../config/database')

const Usuario = database.define('Usuario', {
    id: {
        type: Sequelize.INTEGER,    
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        typeOf: Sequelize.STRING,
        allowNull: false
    },
    nome_usuario: { 
    typeOf: Sequelize.STRING,
    allowNull: false
    },
    data_nascimento: 
    {
    typeof: Sequelize.INTEGER,
    allowNull: false
    },
        genero: {
        typeOf: Sequelize.ENUM("M", "F", "U"),
        allowNull: false
        },
    email: {
        typeOf: Sequelize.STRING,
        allowNull: false
    },
    senha: {
    typeOf: Sequelize.STRING,
    allowNull: false
    }
    }, {
    timestamps: true,
    tableName: 'usuarios'
});

module.exports = Usuario;