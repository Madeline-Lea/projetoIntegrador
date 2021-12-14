const express = require("express")
const linguagensRouter = express.Router()

linguagensRouter.get("/",(req,res)=>{
res.render("../views/feedTopicoseLinguagens/linguagens/perfil");
})




module.exports = linguagensRouter