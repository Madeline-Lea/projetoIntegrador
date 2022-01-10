// começo do app

// chamando os módulos
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session")
//const uuid = require("uuid")


//usando os módulos
app.set("view engine", "ejs"); 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('method'))

//Configuração
  //configurando os Controllers

//configurando as rotas
   // Aqui que fica às famosas rotas, logo iremos testar elas com os metódos dos controllers
const perfilRouter = require("./routes/perfilRouter");
const cadastroRouter = require("./routes/cadastroRouter");
const loginRouter = require("./routes/loginRouter");
const administracaoRouter = require("./routes/administracaoRouter");
const erroRouter = require("./routes/erroRouter");
const postagensRouter = require("./routes/postagensRouter");
const sobreNosRouter = require("./routes/sobreNosRouter");


// chamada das rotas
   // Aqui é a declaração da nossa url, para que possamos apenas utilizar o método do nosso controller e comprimento com o id e params.
app.use("/cadastro", cadastroRouter);
app.use("/perfil", perfilRouter);
app.use("/login", loginRouter);
app.use("/erro", erroRouter);
app.use("/administracao", administracaoRouter);
app.use("/post", postagensRouter);
app.use("/sobre", sobreNosRouter);

//página principal    
  // Aquela página de Hello world não pode faltar, né?
app.get("/", (req, res) => {
    return res.render("index.ejs")
});

// //sequilze 
// Aqui fica o nosso causador de sequelas mesmo, sequelize ou banco de dados versão premium do javascript.
const sequelize = require("./config/database");


sequelize
.authenticate()
.then(() =>{
    console.log("Conexão com banco rodando...")
})
.catch(err => {
    console.error("Error: ", err)
});

//Porta que o servidor está rodando
  // Aonde nosso site está escutando.
app.listen(3000, () => {
    console.log("Servidor Rodando!")
});
