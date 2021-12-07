const express = require("express");
const router = require("./cadastroRouter");

const sobreNosRouter = express.Router()

router.get("/", (req, res) => {
    res.render("/views/sobreNos/contato")
})

module.exports = sobreNosRouter