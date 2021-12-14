const express = require("express");
const erroRouter = express.Router();

erroRouter.get("/", (req,res)=>{
res.render("../views/errors/401")
res.render("../views/errors/403")
res.render("../views/errors/404")
})

erroRouter.post("/",(req,res)=>{

})

module.exports = erroRouter