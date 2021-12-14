const express = require("express");
const router = require("./cadastroRouter");

const sobreNosRouter = express.Router()

router.get("/", (req, res) => {
    return res.render("../views/sobreNos/contato")
});
router.get("/melhorias", (req, res) => {
    return res.render("../views/sobreNos/melhorias")
});

module.exports = sobreNosRouter