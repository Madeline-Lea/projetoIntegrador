const express = require("express")
const perfilRouter = express.Router()

perfilRouter.get("/", (req, res) => {
    return res.render("/views/feedTopicosLinguagens/perfil")
});


module.exports = perfilRouter