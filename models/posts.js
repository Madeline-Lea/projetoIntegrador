const Sequelize = require('sequelize');
const database = require('../config/database')

const Posts = database.define('Posts', {
    post_id: {
        type: Sequelize.INTEGER,    
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    conteudo: {
        typeOf: Sequelize.STRING,
        allowNull: false
    },
        data: 
        {
        typeOf: Sequelize.INTEGER,
        allowNull: false
        }
  
}, {
    timestamps: true,
    tableName: 'usuarios'
});

module.exports = Posts;