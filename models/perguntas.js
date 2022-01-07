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

        titulo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        
        conteudo:{
        type:Sequelize.STRING,
        allowNull:true
          },

        data_postagem:{
            type:Sequelize.INTEGER,
            allowNull:false
        },

        solucao_completa:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        solucao_nao_completa: {
          type:Sequelize.INTEGER,
          allowNull: false
        },
        
      }, {
          timestamps: true,
          tableName: 'perguntas'
      });

      module.exports = Pergunta;
      