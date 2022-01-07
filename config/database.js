    const Sequelize = require("sequelize");
    const sequelize = new Sequelize ("projeto_integrador", "root", "",{
        dialect: "mysql",
        host:"localhost"
    });


    module.exports = sequelize