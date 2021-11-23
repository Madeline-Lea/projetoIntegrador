    const Sequelize = require("sequelize");
    const sequelize = new Sequelize ("projetoIntregador", "root", "",{
        dialect: "mysql",
        host:"localhost"
    });


    module.exports = sequelize