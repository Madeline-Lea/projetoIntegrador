const express  = require("express");
const router = express.Router()
const CadastroController = require("../controllers/CadastroController")
const auth = require('../middlewares/auth')


    router.get("/",  CadastroController.index);
    router.post('/cadastro/salvo', CadastroController.save);
    router.post("/cadastro", CadastroController.store); 

module.exports = router