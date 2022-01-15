    //Configuração
        //Chamando os módulos
            const session = require("express-session");
            const express = require("express");
            const app = express();
            const bodyParser = require("body-parser");
        
    // Módulo Session
   // Esse é o session, utilizado para fazer e iniciar uma sessão ao nosso usuário.
            app.use(session({
                secret: 'Apenas um segredo!',
                resave: false,
                saveUninitialized: true,
                cookie: { secure: true }
            }));

      //Módulo body-parser
          app.use(bodyParser.urlencoded({extended: true}));

     //Controller    
        //Criando a exportação do módulo.

        //Usuário teste
        var login = "Leonardo";
        var password = 12345;

            const loginController = {

                index: (req, res) => {
                    if(req.session.login){
                        
                        res.render("../logado")
                        console.log("Usuário logado é: " + req.session.login)

                    } else {

                        return res.render("../loginControllerTeste");
                    };
                
                },

                login: (req, res) => {
                    console.log(req.body.login)
                    if(req.body.password == password && req.body.entrar == login){
                         
                        req.session.login = login;

                        return res.render("../logado")

                    } else {
                      return res.render("../loginControllerTeste")
                    }

                }
            };

module.exports = loginController