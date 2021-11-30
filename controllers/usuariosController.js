const  usuario = {
    id: 1,
    nome:"",
    sobrenome:"",
    nome_usuario: "",
    data_nascimento: 1,
    genero: "",
    email: "",
    senha: "",
    avatar: ""
}

const { v4: uuid } = require('uuid');
const storage = require('../config/storage')
const fs = require('fs');

const usuariosController = {
    index: (req, res) => {
        let content = fs.readFileSync("./db.json", "utf8")
        const db = JSON.parse(content) 
                
        const usuario = req.session.usuario;
        return res.render("cadastro/cadastro", { usuario: db.usuario, usuario });
    },

    
    store: (req, res) => {
        return res.render('servicos/cadastro');
    },

    save: (req, res) => {
        const { nome, email, senha } = req.body
        const avatar = '/img/servicos/' + req.file.originalname

        let content = fs.readFileSync("./db.json", "utf8")
        const db = JSON.parse(content)
        
        db.servicos.push({ id: uuid(), nome, valor: Number(valor), avatar})
        
        content = JSON.stringify(db)
        fs.writeFileSync("./db.json", content, "utf8")
        
        return res.redirect('/servicos');
    },

    edit: (req, res) => {
        const { id } = req.params
        let content = fs.readFileSync("./db.json", "utf8")
        const db = JSON.parse(content)
        
        const servico = db.servicos.find(servico => servico.id == id);

        return res.render('servicos/edit', { servico })
    },

    update: (req, res) => {
        const { id, nome, sobrenome, nome_usuario,   } = req.body
        const { id } = req.params
        
        let content = fs.readFileSync("./db.json", "utf8")
        const db = JSON.parse(content)
        
        const servicoIndex = db.usuario.findIndex(usuarios => usuarios.id == id); // encontramos a posição do usuário no array
        let avatar =  db.usuario[servicoIndex].avatar
        
        if (req.file) {
            avatar = '/img/servicos/' + req.file.originalname
        }

        const servicoAtualizado = {
            id,
            nome,
            sobrenome,
            nome_usuario,
            data_nascimento,
            genero,
            email,
            senha,
            avatar
        }
        
        db.servicos[servicoIndex] = servicoAtualizado; // atualizamos a posição do array com um usuário atualizado
        
        content = JSON.stringify(db)
        fs.writeFileSync("./db.json", content, "utf8")


        return res.redirect('/servicos');
    },

    delete: (req, res) => {
        const { id } = req.params;
        let content = fs.readFileSync("./db.json", "utf8")
        const db = JSON.parse(content)
        
        db.usuario.push({ id: uuid(), nome, sobrenome, nome_usuario, data_nascimento: Number(valor), genero, email, senha, avatar})
        
        const servicoIndex = db.servicos.findIndex(servico => servico.id == id);
        
        db.usuario.splice(servicoIndex, 1); // removemos um item do array
        
        content = JSON.stringify(db)
        fs.writeFileSync("./db.json", content, "utf8")
        
        return res.redirect('/servicos');
    }
}


module.exports = usuariosController
