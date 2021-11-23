// começo do app

// chamando os módulos
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session")

//usando os módulos
app.set("view engine", "ejs"); 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('method'))

//usando express-section
app.use(session({
  secret: 'Apenas um segredo!',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));


//configurando as rotas
const perfilRouter = require("./routes/perfilRouter");
const cadastroRouter = require("./routes/cadastroRouter");
const linguagensRouter = require("./routes/linguagensRouter");
const administracaoRouter = require("./routes/administracaoRouter");
const erroRouter = require("./routes/erroRouter");
const postagensRouter = require("./routes/postagensRouter");

// chamada das rotas
app.use("/cadastro", cadastroRouter);
app.use("/perfil", perfilRouter);
app.use("/linguagens", linguagensRouter);
app.use("/erro", erroRouter);
app.use("/administracao", administracaoRouter);
app.use("/post", postagensRouter);

//página principal    
app.get("/", (req, res) => {
    return res.render("index.ejs")
});

//sequilze 
const sequelize = require("./config/database")


sequelize
.authenticate()
.then(() =>{
    console.log("Conexão com banco rodando...")
})
.catch(err => {
    console.error("Error: ", err)
});

//Porta que o servidor está rodando
app.listen(3000, () => {
    console.log("Servidor Rodando!")

});
