const express  = require("express");
const cadastroRouter = express.Router()


cadastroRouter.get("/", (req, res) => res.render("../views/cadastro/verificacao"))
cadastroRouter.get("/registro", (req, res) => res.render("../views/cadastro/cadastro"))

module.exports = cadastroRouter