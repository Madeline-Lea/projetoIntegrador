
const database = require('../config/database');


const Usuario = database.define('Usuario', {
    id: {
        type: Sequelize.INTEGER,    
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
  nome: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false
  },
  senha: {
        type: Sequelize.STRING,
        allowNull: false
},
    data_nascimento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    genero:{
        type: Sequelize.ENUM("Masculino", "Feminino", "Indefinido"),
        allowNull: false
    },
    nome_usuario:{
        type: Sequelize.STRING,
        allowNull: false
    },

    timestamps: true,
    tableName: 'usuarios'
});



module.exports = Usuario