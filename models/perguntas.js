      const Sequelize = require('sequelize');
      const database = require('../config/database')

      const Pergunta = database.define('Pergunta', {
        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },

        usuario_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      foreignKey: true
        },
        
        conteudo:{
      type:Sequelize.STRING,
      allowNull:true
        },

        data_postagem:{
            type:Sequelize.INTEGER,
            allowNull:false
        },

        solucao:{
            type:Sequelize.BOOLEAN,
            allowNull:false
        }
        
      }, {
          timestamps: true,
          tableName: 'perguntas'
      });

      module.exports = Pergunta;
      