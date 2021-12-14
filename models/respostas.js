const Sequelize = require('sequelize');
const database = require('../config/database')

const Resposta = database.define("Resposta", {
    id:{
        typeof: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id:{
        type: Sequelize.INTEGER,
        allownull: false, 
        foreignKey: true
    },
    pergunta_id:{
        type: Sequelize.INTEGER,
        allownull: false, 
        foreignKey: true 
    },
    
        timestamps: false,
        tableName:"respostas"
    
    }) 

    module.exports = Resposta