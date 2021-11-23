const { Router } = require("express");
const express = require("express");
const administracaoRouter = express.Router();

administracaoRouter.get("/403", (req, res) => res.render("403"));
administracaoRouter.get("/401", (req, res) => res.render("401"))
administracaoRouter.get("/404", (req, res) => res.render("404"))

module.exports = administracaoRouter